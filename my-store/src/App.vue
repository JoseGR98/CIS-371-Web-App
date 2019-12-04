<template>
  <v-app>

    <v-app-bar
      app
      color="#46CB90"
      dark
      min-height="90px"
      
      >
      <div>
      <v-img
          contain
          src="https://i.imgur.com/451GTdB.png"
          transition="scale-transition"
          width="200"
        />
      </div>
      <v-spacer></v-spacer>
        <div>
        <v-btn @click="logOut" align-end>
        Sign Out
      </v-btn>
        </div>
      

    </v-app-bar>
    <v-content>
  <router-view />
</v-content>
  </v-app>
</template>

<script>
import { AppAUTH } from "./db-init.js";

export default {
  name: 'App',
  methods: {
    logOut() {
      AppAUTH.signOut().then(() => {
      this.$router.push({ path: "/"});
      });
      }
  },
 
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#left {
  float: right;
  align-self: right;
  align-content: right;
}
</style>
