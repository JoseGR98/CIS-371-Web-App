
<template>
  <v-container>
      <h1> THIS IS inventory </h1>   
              <li v-for="productID of inventory"
              v-bind:key="productID['.key']">{{ProductID}}
              </li>
  </v-container>
</template>

<script>
//import { AppDB } from "../db-init.js";
export default {
  name: 'Inventory',

    data: () => ( {
      price: "",
      product: "",
      quantity: "",
  } ),


  methods: {
      buyItem(){



      }
  }
}
</script>

<style>
.products{
    display: inline;
}

</style>