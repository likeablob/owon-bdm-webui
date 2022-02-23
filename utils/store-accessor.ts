import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import BdmDevice from '~/store/bdm-device'

let bdmDevice: BdmDevice // eslint-disable-line import/no-mutable-exports

function initializeStores(store: Store<any>): void {
  bdmDevice = getModule(BdmDevice, store)
}

export { initializeStores, bdmDevice }
