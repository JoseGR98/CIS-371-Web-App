
<template>
  <v-container>
      <h1> THIS IS inventory </h1>
        <div>
            
            <tr v-for="(products, pos) in products" :key="pos">
            <td>{{products.product}}</td>
            <td>{{products.quantity}}</td>
            <td>{{products.price}}</td>
            <v-btn @click="Sale" color="primary">Buy Now!</v-btn>
            </tr>
            
        </div> 
  </v-container>
</template>

<script>
import { AppDB } from "../db-init.js";
export default {
  name: 'Inventory',

    data: () => ( {
      products: []
    } ),
    mounted() {
        AppDB.ref("inventory").on("child_added", this.additem);
    },
  methods: {
      additem(snapshot){
        const item = snapshot.val();
        this.products.push({...item, mykey:snapshot.key})
      }
      //sale(){}
  }
}
</script>

<style>


</style>
