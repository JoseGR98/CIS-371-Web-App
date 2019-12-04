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
                    <router-link tag="li" to="/Home">Home</router-link>
                    <router-link tag="li" to="/Deals">Deals</router-link>
                    <router-link tag="li" to="/Sell">Sell</router-link>
                    <router-link tag="li" to="/Contact">Contact</router-link>
                    <router-link tag="li" to="/Support">Support</router-link>
                </ul>
            </nav>

            <div id="content">
                
                <h1>The most important deals of the season</h1>
                
            </div> <!-- end id=content -->

            <footer>
                <p>&#169; Things and Stuf.<br>Client Support: thingsandstufsupport@gmail.com</p>
            </footer>

        </body>
  </v-container>
</template>

<script>
//import { AppDB } from "../db-init.js";
export default {
  name: 'StorePage2',

  data: () => ( {

  } )
}
</script>