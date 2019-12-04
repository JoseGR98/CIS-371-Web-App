<template>
  <v-container>
      <h1> Order History </h1>
        <div class="Grid">
          <table>
            <th>
                <tr>
                    <td>Item Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Transaction</td>
                </tr>
            </th>
            <tr v-for="(products, pos) in products" :key="pos">
            <td>{{pos}}</td>
            <td>{{products.product}}</td>
            <td>{{products.quantity}}</td>
            <td>{{products.typeOfTransaction}}</td>
            </tr>
            </table>
        </div> 
  </v-container>
</template>

<script>
import { AppDB } from "../db-init.js";
import { AppAUTH } from "../db-init.js";

export default {  
  name: 'OrderHistory',
  data: () => ( {
      products: []
  } ),
    mounted() {
        AppDB.ref("orderHistory").on("child_added", this.additem);
          AppAUTH.onAuthStateChanged((user) => {
      if (user) {
        this.userID = user.uid;
      } else {
          // User not logged in or has just logged out.
         }
});
    },
  methods: {
    additem(snapshot){
        const items = snapshot.val();
        this.products.push({...items, mykey:snapshot.key})
      },
  }
}
</script>

<style>

</style>