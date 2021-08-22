<template>
  <div class="detalle py-5 d-flex justify-content-center container">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-5 img"
        
        :style="{ backgroundImage: `url(${pizza.img})` }"
         ></div>
        <div class="col-md-7">
          <div class="card-body">
            <h3 class="card-title text-capitalize">{{pizza.name}}</h3>
            <hr />
            <p class="card-text">
              {{pizza.desc}}
            </p>
            <p class="card-text ">
              <b>Ingredientes:</b>
            </p>
            <ul>
              <li class="text-capitalize w-75"
                v-for="(ingrediente, i) in pizza.ingredients"
                :key="i">
                &#127829; {{ingrediente}}
              </li>
            </ul>

            <div class="d-flex justify-content-between">
              <h2 class=" text-dark">
                Precio: ${{formatNumber(pizza.price)}}
              </h2>
              <button class="btn btn-danger" @click="addToCart(pizza.id)">
                Añadir &#128722;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "@/utils/functions";
const { formatNumber } = utils;

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Detalle",
  props: ["id"],
  computed: {
    ...mapGetters(["pizzaById"]),
    pizza() {
      const {id} = this;
      return this.pizzaById(id);
    },
  },
  methods: {
    formatNumber,
    ...mapActions(["addToCart"])
  },
};
</script>

<style scoped>
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
