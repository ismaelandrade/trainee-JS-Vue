import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    productsInCart: []  
  },
  actions: {
    setProducts: ({ commit }, products) => {
      commit('setProducts', products)
    }
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    },
    addProductInCart: (state, product) => {
      state.productsInCart.push(product)
    }
  },
  getters: {
    getProducts: (state) => {
      return state.products
    }
  }
})

export default store