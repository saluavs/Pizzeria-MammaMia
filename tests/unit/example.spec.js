import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './mocks/store-config'

const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store(storeConfig)

describe("Test de Vuex", () => {
  const pizza = { cant: 1, id: "P003" }

  it('Acción para agregar una pizza al carrito', () => {
    expect(store.state.carrito).toHaveLength(0)
    store.dispatch('addToCart', pizza.id)
    expect(store.state.carrito).toEqual([pizza])
  })
})