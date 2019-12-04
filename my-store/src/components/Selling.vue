<template>
  <v-container>
    <head>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Buy the most fantastic stuff in our store">
            
            <title>Things and Stuf | Selling</title>
        </head>
        <body>

            <header><img class="banner" src="../assets/sellBanner.jpg" alt="Banner with advertisement"></header>

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
                
                <h1>Gain some extra money with the stuff that you do not use anymore</h1>
                
            </div> <!-- end id=content -->
            <v-row style="padding: 12px;">
            <v-col style="background: white; border: solid 1px black; padding: 2px;" cols="5">
            <v-text-field label="Name of Item" type="text" v-model="productName" />
            <v-text-field label="Amount to Sell" type="number" v-model.number="quantity" />
            <v-text-field prefix="$" step="0.01" label="Price" type="number" v-model="price"/>
            <v-btn @click="onSale" color="primary">Sell Anything!</v-btn>
            </v-col>
            </v-row>
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
  name: 'Selling',

  data: () => ( {
      productName: "",
      quantity: 0,
      price: "",
      userID: ""
  } ),
  mounted() {
  AppAUTH.onAuthStateChanged((user) => {
  if (user) {
    this.userID = user.uid;
  } else {
    // User not logged in or has just logged out.
  }
});
  },
  methods: {
      onSale() {
        
          AppDB.ref("inventory")
    .push()
    .set({
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
        typeOfTransaction: "Selling"
  });
  this.productName = "";
        this.quantity = 0;
        this.price = 0;
  }
  }
}
</script>

<style >
    
</style>