<template>
  <v-container>
      <h1> Order History </h1>
        <div class="Grid">
          <table>
            <div v-for="(items, pos2) in products" :key="pos2">
            <tr v-for="(products, pos) in items" :key="pos">
            <td>Product: {{products.product}}</td>
            <td>Quantity: {{products.quantity}}</td>
            <td>Price: ${{products.price}}</td>
            <td>Transaction: {{products.typeOfTransaction}}</td>
            </tr>
            </div>
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
       const item = snapshot.val();
       if(AppAUTH.currentUser.uid === snapshot.key){
        this.products.push({...item, mykey:snapshot.key})
        }else{
          //none
        }
      }
  }
}
</script>
<style>
.Grid {margin: 5px 0 50px 0; border: solid 1px;}
.Grid td {
      padding: 20px;
      border: solid 1px black; }
.Grid th  {
      padding : 40px 20px;
      font-size: 0.9em; }
</style>