
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
            <td>${{products.price}}</td>
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
      products: [],
      keys: []
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
        this.keys.push({mykey:snapshot.key})
      },
    sales(){
    
    AppDB.ref("orderHistory/" + this.userID)
    .push()
    .set({
        product: this.productName,
        quantity: this.quantity,
        price: this.price,
        typeOfTransaction: "Buying"
  })
    this.remover()
  },
    remover(){
      this.userID.foreach((keys) =>
      {
        AppDB.ref("inventory").child(keys).remove();
    });
    }
      }
         }
  

</script>

<style>
.Grid {margin: 5px 0 10px 0; border: solid 1px;}

.Grid td {
      padding: 20px;
      border: solid 1px black; }

.Grid th  {
      padding : 40px 20px;
      font-size: 0.9em; }

</style>