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
                    <router-link tag="li" to="/Home">Home</router-link>
                    <router-link tag="li" to="/Deals">Deals</router-link>
                    <router-link tag="li" to="/Sell">Sell</router-link>
                    <router-link tag="li" to="/Contact">Contact</router-link>
                    <router-link tag="li" to="/Support">Support</router-link>
                </ul>
            </nav>

            <div id="content">
                
                <h1>Gain some extra money with the stuff that you do not use anymore</h1>
                
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
  name: 'StorePage3',

  data: () => ( {

  } )
}
</script>