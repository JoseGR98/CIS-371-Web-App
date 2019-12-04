<template>
<v-container>
  <head>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Buy the most fantastic stuff in our store">
            
            <title>Things and Stuf | Season Deals</title>
        </head>
        <body>

            <header><img class="banner" src="../assets/dealsBanner.png" alt="Banner with advertisement"></header>

            <nav>
                <ul>
                    <router-link tag="li" to="/StorePage">Home</router-link>
                    <router-link tag="li" to="/Inventory">Deals</router-link>
                    <router-link tag="li" to="/SellPage">Sell</router-link>
                    <router-link tag="li" to="/Contact">Contact</router-link>
                    <router-link tag="li" to="/Support">Support</router-link>
                </ul>
            </nav>

            <div id="content">
                
                <h1>The most important deals of the season</h1>
                
            </div> <!-- end id=content -->
            <div>
                <v-spacer></v-spacer>
            <table class="Grid">
            <thead>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th style="width: 15%;">Amount to Purchase </th>
            </thead>
            <tbody>
            <tr v-for="(products, pos) in products" :key="pos">
            <td>{{products.product}}</td>
            <td>{{products.quantity}}</td>
            <td>${{products.price}}</td>
            <td> <v-text-field type="number" v-model="products.value"></v-text-field> </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td> <v-btn rounded="true" @click="purchase">Buy Items </v-btn></td>
            </tr>
                </tbody>
            </table>    
        </div> 
            <footer>
                <p>&#169; Things and Stuf.<br>Client Support: thingsandstufsupport@gmail.com</p>
            </footer>

        </body>
  </v-container>
</template>
<script>
import { AppDB } from "../db-init.js";
import { AppAUTH } from "../db-init.js";
export default {
  name: 'Inventory',
    data: () => ( {
      products: [],
    } ),
    beforeDestroy() {
         AppDB.ref("inventory").on("child_added", this.additem);
  AppDB.ref("inventory").off("child_removed", this.removeListener);
},
    mounted() {
        AppDB.ref("inventory").on("child_added", this.additem);
        AppDB.ref("inventory").on("child_removed", this.removeListener);
          AppAUTH.onAuthStateChanged((user) => {
      if (user) {
        this.userID = user.uid;
      } else {
          // User not logged in or has just logged out.
         }
});
    },
  methods: {
      removeListener(snapshot) {
          this.products = this.products.filter(z => z.mykey != snapshot.key);
      },

      additem(snapshot){
        const item = snapshot.val();
        this.products.push({...item, mykey:snapshot.key, value: 0})
      },
      purchase() {

        this.products.forEach((prod) => {
            if (prod.value != 0) {
            if (prod.value > prod.quantity) {
                alert("Some of your purchases may exceed our current stock. Please update and try again");
            } else if (prod.value == prod.quantity) {
                AppDB.ref("orderHistory/" + this.userID)
    .push()
    .set({
        product: prod.product,
        quantity: prod.quantity,
        price: prod.price,
        typeOfTransaction: "Buying"
  });
            AppDB.ref("inventory")
            .child(prod.mykey)
            .remove();
            } else {
                const newQ = prod.quantity - prod.value;
                AppDB.ref("orderHistory/" + this.userID)
    .push()
    .set({
        product: prod.product,
        quantity: prod.value,
        price: prod.price,
        typeOfTransaction: "Buying"
  });
                AppDB.ref("inventory")
                .child(prod.mykey)
                .update({
                    price: prod.price,
                    product: prod.product,
                    quantity: newQ
                })
            }
            }
    });
    this.$router.push({ path: "/Inventory" });
  }
 }}
</script>
<style>
#amount {
    width: 50%;
}

thead {
    background-color: #46CB90;
}

.Grid {margin: 5px 0 10px 0; border: solid 2px;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        }
.Grid td {
      padding: 20px;
      border: solid 1px black;
      padding: 5px;
      }


.Grid th  {
      padding : 40px 20px;
      font-size: 0.9em;
      border: solid 1px black; }
tr:nth-child(even) {background: rgb(126, 253, 196)}
tr:nth-child(odd) {background: rgb(123, 218, 175)}

</style>