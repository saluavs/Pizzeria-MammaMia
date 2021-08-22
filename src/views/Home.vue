<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="row py-5 pizzas">
        <div class="col-12 col-sm-3 mb-4 pizza" v-for="(pizza, i) in pizzas" :key="i">
          <!-- :pizzas es el padre -->
          <Card :pizzas="pizza" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Card,
  },
  computed: {
    ...mapState(["pizzas"]),
  },
};
</script>
