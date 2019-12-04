<template>
  <v-container>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Buy the most fantastic stuff in our store">
      
      <title>Things and Stuf | Official Store</title>
    </head>
    <body>

      <header><img class="banner" src="../assets/homeBanner.jpg" alt="Banner with advertisement"></header>

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
        
        <h1>Find everything you need. All in one place!</h1>
        
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
  name: 'StorePage',

  data: () => ( {

  } )
}
</script>

<style>
  img {
    max-width: 100%;
    height: auto;
  }
  ul {
    padding-left: 0;
  }
  ul li {
    list-style-type: none;
  }
  li a {
    text-decoration: none;
    font-weight: bold;
    color: #ffffff;
    text-shadow: -1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;
  }
  nav {
    margin-top: 3%;
    margin-bottom: 6%;
    margin-left: 5%;
    margin-right: 5%;
  }
  nav li{
    display: block;
    list-style-type: none;
    
    background-color: #db5800;
    
    font-size: 1.4em;
    border-spacing: 2em;
    border-radius: 0.8em;
    border: 0.1em #c24e00 solid;
    padding: 0.4em;
    text-align: center;

    margin: auto;
    width: 80%;
  }
  nav li .phone-mobile {
    border: none;
    font-size: 0.7em;
    margin-top: 0.6em;
    margin-bottom: 0.1em;
  }
  body {
    text-align: justify;
    background-image: linear-gradient(#ff7e29, #ff8e42, #ffb380, #ffdac2, #ffffff);
    font-family: 'Roboto', Arial, Helvetica, Sans-Serif;
  }
  h1 {
    margin-top: 5%;
    text-align: center;
    color: #db5800;
  }
  form {
    width: 100%;
  }
  #submitF, #resetF {
    margin-left: 10px;
    padding: 5px;
    border: solid black;
    background: lightblue;
  }
  footer {
    text-align: center;
    width: 80%;
    margin: auto;
    margin-top: 2%;
  }
  #content {
    background-color: rgba(255,255,255,0.7);
    margin: auto;
    padding: 1% 3%;
    border-radius: 0.8em;
  }
  #fname, #lname, #email, #state, #comments, #number {
    width: 100%;
    background: white;
  }
  .image-container {
    text-align: center;
  }
  .banner {
    width: 100%;
  }
  .socialmedia {
    display: inline;
    margin: 3%;
  }
  .ul-form {
    padding-left: 0;
  }
  form #basic-info label {
    display: block;
  }
  form > fieldset > p {
    text-align: right;
    font-size: 0.8em;
  } 
  .linkul {
    color: #000000;
    font-family: 'Dokdo', cursive; 
  }
  .ul-links {
    text-align: center;
    font-size: 2em;
    margin-bottom:0.5em;
  }
  element .style {
    padding: 0px;
  }
  @media only screen and (min-width: 830px) {
    #content {
      width: 90%;
      padding: 1.5%;
      overflow: auto;
    }
    #fname, #lname, #email, #state, #number {
      width: 50%; 
    }
    #comments {
      width: 100%;
    }
    nav {
      text-align: center;
    }
    nav li {
      display: inline-block;

      padding: 0.5% 0;
      margin-left: 0.1%;
      margin-right: 0.1%;
      border: 0;
      border-spacing: 0;
      border-radius: 0;
      border-top: solid #c24e00;
      border-bottom: solid #c24e00;

      width: 15%;
      white-space: nowrap;
    }
    h2 {
      margin-top: 5%;
    }
    nav li:link {
      color: #ffffff;
      text-shadow: -1px 0 black, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;
    }
    nav li:hover {
      color: #D3D3D3;
    }
    nav li:active {
      color: #ADD8E6;
    }
    .linkul:hover {
      color: #00cc66;
    }
    .linkul:active {
      color: #00cc66;
    }
    form ul li {
      display: inline;
      margin: auto 1%;
    }
    .article-float {
      float: right;
      width: 46%;
      margin-left: 3%;
    }
    form {
      width: 50%;
      margin: auto;
    }
    footer {
      clear: both;
      padding: 0.1em;
    }
    .socialmedia {
      width: 10%;
    }
  }
  
  @media (min-width: 960px) {
    .container {
      max-width: 100%;
    }
    
  }
</style>