<template>
  <div class="card w-100">
    <img class="card-img-top" :src="pizzas.img" />
    <div class="card-body">
      <h4 class="card-title text-capitalize">{{pizzas.name}}</h4>
      <hr />
      <p class="card-text">
        <b>Ingredientes:</b>
      </p>
      <ul class="m-0">
        <li class="text-capitalize w-75"
        v-for="(ingrediente, i) in pizzas.ingredients"
        :key="i"
         >&#127829; {{ingrediente}}</li>
      </ul>
    </div>
    <hr />
    <div class="card-body">
      <h2 class="text-center text-dark pb-3">${{ formatNumber(pizzas.price)}}</h2>
      <div class="d-flex justify-content-around">
        <router-link :to="`/pizza/${pizzas.id}`"
          ><button class="btn btn-info text-white">
            Ver Más &#128064;
          </button></router-link
        >
        <button class="btn btn-danger" @click="addToCart(pizzas.id)">
          Añadir &#128722;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import utils from "@/utils/functions";
import { mapActions } from 'vuex';
const { formatNumber } = utils;

export default {
  name: "Card",
  props:["pizzas"],
  methods: {
    formatNumber,
    ...mapActions(["addToCart"])
  },
};
</script>
