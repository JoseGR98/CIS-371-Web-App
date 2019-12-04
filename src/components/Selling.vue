<template>
  <v-container>
       <v-text-field label="Name of Item" type="text" v-model="productName" />
       <v-text-field label="Amount to Sell" type="number" v-model.number="quantity" />
       <v-text-field prefix="$" step="0.01" label="Price" type="number" v-model="price"/>
      <v-btn @click="onSale" color="primary">Sell Anything!</v-btn>
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
  }
  }
}
</script>