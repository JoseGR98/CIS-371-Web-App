<template>
  <v-container>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Buy the most fantastic stuff in our store">
        
        <title>Things and Stuf | Contact</title>
    </head>
    <body>

        <header><img class="banner" src="../assets/contactBanner.png" alt="Banner with advertisement"></header>

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

            <h1>Contact Information</h1>

            <article>
                <h2>Check where we are</h2>

                <p>Currently we are only available in one place, we do not have enough resources to expand in more places. However, we are working hard to be present in more locations, even in your favorite city! In the meantime, you can come to our unique and fantastic store.</p>

                <div id="map">
                </div>
                
            </article>

            <article>
                <h2>Check our social media</h2>

                <div class="image-container">
                    <a href="https://mail.google.com/" target="_blank"><img class="socialmedia" src="../assets/mailLogo.png" alt="Email"></a>
                    <a href="https://facebook.com" target="_blank"><img class="socialmedia" src="../assets/facebookLogo.png" alt="Facebook"></a>
                    <a href="https://twitter.com" target="_blank"><img class="socialmedia" src="../assets/twitterLogo.png" alt="Twitter"></a>
                </div>

                <p>If you are not sure about coming to our store, you can check our social networks and see the variety of photographs we have, as well as the reviews of our previous clients. You can also write us comments or share your photos with us, we love to read them and see your experience during your visits.</p>
            </article>

        </div> <!-- end id=content -->

        <footer>
            <p>&#169; Things and Stuf.<br>Client Support: thingsandstufsupport@gmail.com</p>
        </footer>

    </body>
  </v-container>
</template>

<script>
//import { AppDB } from "../db-init.js";
//import GoogleMapsLoader from 'google-maps'
export default {
  name: 'StorePage4',

  /*mounted: function () {
    GoogleMapsLoader.KEY = 'AIzaSyBZzyMvh7kv6J48P2WOQHWXtxWwz1NsYeA';
    GoogleMapsLoader.load(function(google) {
      var options = {
        zoom: 8,
        center:{ lat: 42.967485, lng: -85.887713 }
      }
      var map = new google.maps.Map(document.getElementById('map'), options);
    });
  }*/
}
</script>

<style scoped>
  #map{
    height: 400px;
    width: 90%;
    margin: auto;
  }
</style>