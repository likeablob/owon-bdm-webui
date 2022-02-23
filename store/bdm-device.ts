import {
  Module,
  VuexModule,
  Mutation,
  MutationAction,
  Action,
} from 'vuex-module-decorators'

import log from 'loglevel'
import {
  OwonB41TPlus,
  BdmParseResultT,
  BdmFuncNameT,
  BdmCommandNameT,
} from '../utils/owon-b41t-plus'

log.setDefaultLevel('INFO')

const OWON_SERVICE_UUID = '0000fff0-0000-1000-8000-00805f9b34fb'
const OWON_CHARACTERISTIC_NAMES = ['MEASURE', 'CMD'] as const
type OwonCharacteristicsT = typeof OWON_CHARACTERISTIC_NAMES[number]
const OWON_CHARACTERISTIC_UUIDS: { [K in OwonCharacteristicsT]: string } = {
  MEASURE: '0000fff4-0000-1000-8000-00805f9b34fb',
  CMD: '0000fff3-0000-1000-8000-00805f9b34fb',
}

const owonCharacteristics: {
  [P in OwonCharacteristicsT]: BluetoothRemoteGATTCharacteristic | undefined
} = {
  MEASURE: undefined,
  CMD: undefined,
}
let gattServer: BluetoothRemoteGATTServer | undefined

// FIXME: Write abstraction layers for Web Bluetooth API and decouple them from the store.
@Module({
  name: 'bdm-device',
  stateFactory: true,
  namespaced: true,
  preserveState: false,
})
export default class BdmDevice extends VuexModule {
  isConnected = false
  reported: BdmParseResultT | null = null
  histories: readonly BdmParseResultT[] = []

  @Mutation
  setConnectionState(isConnected: boolean) {
    this.isConnected = isConnected
  }

  @Mutation
  setReported(v: BdmParseResultT) {
    this.reported = v
    this.histories = Object.freeze(
      [...this.histories, Object.freeze(v)].filter(
        (v) => v.timestamp > Date.now() - 1000 * 60 * 60
      )
    )
  }

  @Mutation
  resetHistory() {
    this.histories = []
  }

  get historiesOf() {
    return (funcName: BdmFuncNameT) => {
      return this.histories.filter((v) => v.funcName === funcName)
    }
  }

  @MutationAction
  async connect() {
    const device = await navigator.bluetooth.requestDevice({
      // filters: [{ services: [OWON_SERVICE_UUID] }],
      acceptAllDevices: true,
      optionalServices: [OWON_SERVICE_UUID],
    })

    device.addEventListener('gattserverdisconnected', () => {
      log.info('device disconnected')
      this.context.commit('setConnectionState', false)
      this.context.dispatch('disconnect')
    })

    gattServer = await device!.gatt!.connect()
    const service = await gattServer.getPrimaryService(OWON_SERVICE_UUID)
    const characteristics = await service.getCharacteristics()

    for (const key of OWON_CHARACTERISTIC_NAMES) {
      const uuid = OWON_CHARACTERISTIC_UUIDS[key]
      const ch = characteristics.find((v) => v.uuid === uuid)
      if (ch) {
        owonCharacteristics[key] = ch
      }
    }
    log.info('owonCharacteristics', owonCharacteristics)

    owonCharacteristics.MEASURE?.addEventListener(
      'characteristicvaluechanged',
      (_: Event) => {
        const packet = owonCharacteristics.MEASURE?.value

        if (!packet) {
          return
        }
        const parsed = OwonB41TPlus.parse(packet)
        log.debug(parsed)

        this.context.commit('setReported', parsed)
      }
    )

    owonCharacteristics.MEASURE?.startNotifications()

    return { isConnected: true }
  }

  @MutationAction
  async disconnect() {
    for (const key of OWON_CHARACTERISTIC_NAMES) {
      if (gattServer?.connected) {
        await owonCharacteristics[key]?.stopNotifications()
      }
      owonCharacteristics[key] = undefined
    }

    if (gattServer) {
      gattServer.disconnect()
    }

    return Promise.resolve({ isConnected: false })
  }

  @Action
  async sendCommand(cmdName: BdmCommandNameT) {
    if (!this.isConnected) {
      return
    }

    await owonCharacteristics.CMD?.writeValue(
      OwonB41TPlus.generateCommand(cmdName)
    )
  }

  @Action
  async switchSelect() {
    await this.sendCommand('Select')
  }

  @Action
  async switchAuto() {
    await this.sendCommand('Auto')
  }
}
