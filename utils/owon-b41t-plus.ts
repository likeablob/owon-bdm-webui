import log from 'loglevel'

log.setDefaultLevel('DEBUG')

export const BDM_FUNC_NAMES = [
  'DCV',
  'ACV',
  'DCA',
  'ACA',
  'Ohm',
  'Cap',
  'Hz',
  'Duty',
  'TempC',
  'TempF',
  'Diode',
  'Continuity',
  'hFE',
] as const
export const BDM_SCALE_NAMES = [
  'nano',
  'micro',
  'milli',
  'Unit',
  'kilo',
  'mega',
] as const

export type BdmFuncNameT = typeof BDM_FUNC_NAMES[number]
export type BdmScaleNameT = typeof BDM_SCALE_NAMES[number]

export const BDM_FUNC_NAME_TO_ID: { [K in BdmFuncNameT]: number } = {
  DCV: 0,
  ACV: 1,
  DCA: 2,
  ACA: 3,
  Ohm: 4,
  Cap: 5,
  Hz: 6,
  Duty: 7,
  TempC: 8,
  TempF: 9,
  Diode: 10,
  Continuity: 11,
  hFE: 12,
}
export const BDM_SCALE_NAME_TO_ID: { [K in BdmScaleNameT]: number } = {
  nano: 1,
  micro: 2,
  milli: 3,
  Unit: 4,
  kilo: 5,
  mega: 6,
}

export type BdmRawDataT = {
  marker: number
  func: number
  scale: number
  decimal: number
  junk: number
  max: number
  min: number
  lowBattery: number
  autoRange: number
  delta: number
  hold: number
  sign: number
  digits: number
}
export type BdmReadingTypesT = {
  max: boolean
  min: boolean
  lowBattery: boolean
  autoRange: boolean
  delta: boolean
  hold: boolean
}
export type BdmParseResultT = {
  rawData: BdmRawDataT
  funcName?: BdmFuncNameT
  scaleName?: BdmScaleNameT
  readingTypes: BdmReadingTypesT
  readValue: number
  isOverloaded: boolean
  timestamp: number
}

const DECIMAL_OVERLOAD = 6

export const BDM_COMMAND_NAMES = [
  'Select',
  'Auto',
  'Range',
  'Backlight',
  'Hold',
  'Bluetooth Off',
  'Relative',
  'Hz/Duty',
  'Normal',
  'Min/Max',
] as const
export type BdmCommandNameT = typeof BDM_COMMAND_NAMES[number]
export const BDM_COMMAND_NAME_TO_DATA: { [K in BdmCommandNameT]: number } = {
  Select: 0x0101,
  Auto: 0x0002,
  Range: 0x0102,
  Backlight: 0x0003,
  Hold: 0x0103,
  'Bluetooth Off': 0x0004,
  Relative: 0x0104,
  'Hz/Duty': 0x0105,
  Normal: 0x0006,
  'Min/Max': 0x0106,
}

export class OwonB41TPlus {
  public static parse(packet: DataView): BdmParseResultT {
    const chunkA = packet.getUint16(0, true)
    const chunkB = packet.getUint16(2, true)
    const chunkC = packet.getUint16(4, true)

    const rawData: BdmRawDataT = {
      marker: chunkA >> 10,
      func: (chunkA >> 6) & 0xf,
      scale: (chunkA >> 3) & 0x7,
      decimal: chunkA & 0x7,
      junk: (chunkB >> 6) & 0x3,
      max: (chunkB >> 5) & 0x1,
      min: (chunkB >> 4) & 0x1,
      lowBattery: (chunkB >> 3) & 0x1,
      autoRange: (chunkB >> 2) & 0x1,
      delta: (chunkB >> 1) & 0x1,
      hold: chunkB & 0x1,
      sign: chunkC >> 15,
      digits: chunkC & 0x7fff,
    }

    const isOverloaded = rawData.decimal === DECIMAL_OVERLOAD
    let readValue: number =
      (rawData.digits * (rawData.sign ? -1 : 1)) / 10 ** rawData.decimal
    if (isOverloaded) {
      readValue = 0
    }

    return {
      rawData,
      funcName: BDM_FUNC_NAMES.find(
        (v) => BDM_FUNC_NAME_TO_ID[v] === rawData.func
      ),
      scaleName: BDM_SCALE_NAMES.find(
        (v) => BDM_SCALE_NAME_TO_ID[v] === rawData.scale
      ),
      readingTypes: {
        max: rawData.max > 0,
        min: rawData.min > 0,
        lowBattery: rawData.lowBattery > 0,
        autoRange: rawData.autoRange > 0,
        delta: rawData.delta > 0,
        hold: rawData.hold > 0,
      },
      readValue,
      isOverloaded,
      timestamp: Date.now(),
    }
  }

  public static generateCommand(cmdName: BdmCommandNameT) {
    return new Uint16Array([BDM_COMMAND_NAME_TO_DATA[cmdName]])
  }
}
