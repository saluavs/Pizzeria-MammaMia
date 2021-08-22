<template>
  <div class="carrito p-5">
    <div class="detalles bg-light w-75 m-auto p-5">
      <h5>Detalles del pedido:</h5>
      <div class="p-3 list">
        <div v-for="(pizza, i) in carrito" :key="i" >
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img width="50" :src="pizza.img" />
              <h6 class="mb-0 text-capitalize p-2">{{pizza.name}}</h6>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="mb-0 p-2 text-success">
                ${{totalByPizza(pizza.cant, pizza.price)}}
              </h6>
              <button class="btn btn-danger" @click="minus(pizza.id)">-</button>
              <b class="mx-2">{{pizza.cant}}</b>
              <button class="btn btn-primary" @click="plus(pizza.id)">+</button>
            </div>
          </div>
          <hr class="mt-2" />
        </div>

        <h2>Total: ${{formatNumber(total)}}</h2>
        <button class="btn btn-success">Ir a Pagar</button>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "@/utils/functions";
const { formatNumber } = utils;
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Carrito",
  computed: {
    ...mapGetters(["carrito", "total"])
  },
  methods: {
    ...mapActions(["plus", "minus"]),
    totalByPizza(cant, price){
      return formatNumber(cant * price);
    },
    formatNumber,
  },
};
</script>

<style scoped>
.list {
  background: white;
}
</style>
