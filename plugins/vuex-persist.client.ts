import { Store } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

export default ({ store }: { store: Store<any> }) => {
  new VuexPersistence({ modules: [] }).plugin(store)
}
