<template>
  <v-container>
      <h1> THIS IS ORDER </h1>
  </v-container>
</template>

<script>
import { AppDB } from "../db-init.js";
import { AppAUTH } from "../db-init.js";

export default {
    
  name: 'OrderHistory',

  data: () => ( {
      product: "",
      price: "",
      quantity: "",
      typeOfTransaction: ""
  } ),
  mounted() {
    AppAUTH.onAuthStateChanged((user) => {
  if (user){
    this.userID = user.uid
  }else{
    //user is not logged in
  }
  });
  },
  methods: {
    addData(){
     AppDB.ref("orderHistory/" + this.userID).push().set({
      product: this.productname,
      price: this.price,
      quantity: this.quantity,
      typeOfTransaction: "Selling"
     });     
    }
  }
}

</script>