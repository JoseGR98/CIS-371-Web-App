<template>
  <v-container>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Buy the most fantastic stuff in our store">
        
        <title>Things and Stuf | Customer Support</title>
    </head>
    <body>

        <header><img class="banner" src="../assets/customerBanner.jpg" alt="Banner with advertisement"></header>

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
            
            <h1>Have a question? Dont worry, we are here to help!</h1>

            <form>
                <fieldset id="basic-info">
                    <legend>Basic information</legend>

                    <label for="fname">First Name *</label>
                        <input type="text" id="fname" name="fname" placeholder="John" v-model="textF" required>

                    <label for="nlame">Last Name *</label>
                        <input type="text" id="lname" name="lname" placeholder="Doe" v-model="textF" required>

                    <label for="email">Email *</label>
                        <input type="email" id="email" name="email" placeholder="address@example.com" v-model="textF" required>

                    <label for="number">Phone Number</label>
                        <input type="tel" id="number" name="number" placeholder="616-466-7741" v-model="numberF">

                    <p>Fields marked with * are required</p>
                </fieldset>

                <fieldset>
                    <legend>Topic of the problem</legend>
                    <ul class="ul-form">
                        <li>
                            <input id="purchases" type="radio" value="Purchases" name="purchases" v-model="radioF">
                            <label for="purchases">Purchases</label>
                        </li>
                        <li>
                            <input id="sellings" type="radio" value="Sellings" name="sellings" v-model="radioF">
                            <label for="sellings">Sellings</label>
                        </li>
                        <li>
                            <input id="payments" type="radio" value="Payments" name="payments" v-model="radioF">
                            <label for="payments">Payments</label>
                        </li>
                    </ul>			
                </fieldset>

                <fieldset>
                    <legend>Describe your problem</legend>
                    <textarea id="comments" name="comment" rows="4" cols="35" v-model="textareaF" placeholder="Include as many details as possible"></textarea>
                </fieldset>

                <fieldset>
                    <legend>Everything ready?</legend>
                    <button id="submitF" v-on:click="submitF">Submit</button>
                    <button id="resetF" v-on:click="resetF">Reset</button>
                </fieldset>
            </form>
            
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
  name: 'StorePage5',

  data: () => ( {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            problem: '',
            description: ''
        }
  } ),
  methods: {
      submitF() {
        alert('Form Submitted!')
      },
      resetF() {
        document.getElementById("#fname").value = "";
        document.getElementById("#lname").value = "";
        document.getElementById("#email").value = "";
        document.getElementById("#number").value = "";
        document.getElementById("#comments").value = "";
      }
  }
}
</script>