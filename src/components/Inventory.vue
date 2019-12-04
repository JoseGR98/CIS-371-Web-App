
<template>
  <v-container>
      <h1> Store Inventory </h1>
        <div class="Grid">
            <th>
                <tr>
                    <td>Item Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                </tr>
            </th>
            <tr v-for="(products, pos) in products" :key="pos">
            <td>{{products.product}}</td>
            <td>{{products.quantity}}</td>
            <td>{{products.price}}</td>
            <v-btn @click="sales" color="primary">Buy Now!</v-btn>
            </tr>
            
        </div> 
  </v-container>
</template>

<script>
import { AppDB } from "../db-init.js";
import { AppAUTH } from "../db-init.js";
export default {
  name: 'Inventory',

    data: () => ( {
      products: []
    } ),
    mounted() {
        AppDB.ref("inventory").on("child_added", this.additem);
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
        this.products.push({...item, mykey:snapshot.key})
      },
    sales(){
        AppDB.ref("inventory").push().set({
        product: this.productName,
        quantity: this.quantity,
        price: this.price
  });
    AppDB.ref("orderHistory/" + this.userID)
    .push()
    .set({
        product: this.productName,
        quantity: this.quantity,
        price: this.price,
        typeOfTransaction: "Buying"
  });
      }
  }
}
</script>

<style>
.Grid {background-color: #fff; margin: 5px 0 10px 0; border: solid 1px #525252; border-collapse:collapse; font-family:Calibri; color: #474747;}

.Grid td {

      padding: 20px;

      border: solid 1px black; }

.Grid th  {

      padding : 40px 20px;
      font-size: 0.9em; }

</style>