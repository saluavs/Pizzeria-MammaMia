import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pizzas: [],
    carrito: [],
  },
  mutations: {
    GET_PIZZAS(state, pizzas) {
      state.pizzas = pizzas
    },
    ADD_TO_CART(state, pizza) {
      state.carrito.push(pizza);
    },
    UPDATE_CART(state, carrito) {
      state.carrito = carrito;
    },
  },
  actions: {
    async get_Pizzas({ commit }) {
      const { data: pizzas } = await axios.get("/pizzas.json");
      commit("GET_PIZZAS", pizzas);
    },

    addToCart({ commit, dispatch, state }, pizzaId) {
      const pizzaExist = state.carrito.find((p) => p.id == pizzaId);
      if (pizzaExist) {
        dispatch("plus", pizzaId);
      }else {
        const pizza = { id: pizzaId, cant: 1};
        commit ("ADD_TO_CART", pizza);
      }
      alert("Pizza añadida al carrito!");
    }
,

    plus({ state, commit}, id) {
      const carrito = state.carrito.map((p) =>
      p.id == id ? (p.cant++, p) : p
      );
      commit("UPDATE_CART", carrito);
    },
    minus({ state, commit}, id) {
      const {cant} = state.carrito.find((p) => p.id == id);
      let carrito;
      if (cant == 1) {
        carrito = state.carrito.filter((p) => p.id !== id);
      }else {
        carrito = state.carrito.map((p) =>(p.id == id ? (p.cant--, p) : p));
      }
      commit("UPDATE_CART", carrito);
    }
  },


  getters: {
    pizzaById: (state) => (id) => {
      const pizza = state.pizzas.find((p) => p.id == id);
      return pizza;
    },
    carrito: (state) => {
      const carrito = state.carrito.map((p) => {
        const pizza = state.pizzas.find((pizzas) => pizzas.id == p.id);
        return { ...pizza, cant: p.cant };
      });
      return carrito;
    },
    total: (state) => {
      return state.carrito.reduce((a, b) => {
        const pizza = state.pizzas.find((p) => p.id == b.id);
        const totalByPizza = b.cant * pizza.price;
        return a + totalByPizza;
      }, 0);
    }
  }
})
