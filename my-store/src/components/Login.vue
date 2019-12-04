<template>
  <v-container>
    <div id="userInfo">

      <v-text-field id="info" label="Username/Email" v-model="userEmail"></v-text-field>
      <v-text-field id="info" label="Password" type="password" v-model="userPassword"></v-text-field>
    <v-btn @click="doSignIn">Sign In</v-btn>
    
    <p> Don't have an account? </p>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Sign Up</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Make an account</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                label="Email" 
                hint="We promise not to send spam"
                persistent-hint
                required
                v-model="newEmail"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Password" type="password" v-model="newPassword" required></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="doSignUp">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { AppAUTH } from "../db-init.js";
export default {
  name: 'Login',

  data: () => ( {
      userEmail: "",
      userPassword: "",
      isLoggedIn: false,
      newEmail: "",
      newPassword: "",
      dialog: false,
  } ),
  mounted() {
    AppAUTH.onAuthStateChanged((u) => {
  if (u == null) this.isLoggedIn = false;
  else this.isLoggedIn = true;
    });
    },
  methods: {
    doSignUp() {
        AppAUTH.createUserWithEmailAndPassword(this.newEmail, this.newPassword)
  .then(() => {
    this.dialog = false;
    
  })
  .catch((err) => {
    alert("Error " + err);
  });
    },
    doSignIn() {
        AppAUTH.signInWithEmailAndPassword(this.userEmail, this.userPassword)
  .then(() => {
    this.$router.push({ path: "/Home" });
  })
  .catch((err) => {
    alert("Error " + err);
  });
    }
  }
}
</script>

<style scoped>
    #userInfo {
      display: grid;

    grid-area: auto;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(81, 178, 211);
    border-radius: 5px;
    grid-row-gap: 5px;
    justify-content: center;
    width: 40%;
    padding: 10px;
}

</style>