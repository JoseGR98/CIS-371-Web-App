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
                <router-link tag="li" to="/StorePage">Home</router-link>
                <router-link tag="li" to="/Inventory">Deals</router-link>
                <router-link tag="li" to="/SellPage">Sell</router-link>
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
                        <input type="text" id="fname" name="fname" placeholder="John" required>

                    <label for="nlame">Last Name *</label>
                        <input type="text" id="lname" name="lname" placeholder="Doe" required>

                    <label for="email">Email *</label>
                        <input type="email" id="email" name="email" placeholder="address@example.com" required>

                    <label for="state">State</label>
                        <select id="state" name="state">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI" selected>Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <p>Fields marked with * are required</p>
                </fieldset>

                <fieldset>
                    <legend>How did you find us? (Places where you have seen us)</legend>
                    <ul class="ul-form">
                        <li>
                            <input id="advertisement" type="checkbox" name="advertisement" value="Advertisement">
                            <label for="advertisement">Advertisement</label>
                        </li>
                        <li>
                            <input id="internet" type="checkbox" name="internet" value="Internet">
                            <label for="internet">Internet</label>
                        </li>
                        <li>
                            <input id="recommendation" type="checkbox" name="recommendation" value="Recommendation">
                            <label for="recommendation">Recommendation</label>
                        </li>
                        <li>
                            <input id="commercial" type="checkbox" name="commercial" value="Commercials">
                            <label for="commercial">Commercials</label>
                        </li>
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>Topic of the problem</legend>
                    <ul class="ul-form">
                        <li>
                            <input id="purchases" type="radio" name="owner" value="Purchases">
                            <label for="purchases">Purchases</label>
                        </li>
                        <li>
                            <input id="sellings" type="radio" name="owner" value="Sellings">
                            <label for="sellings">Sellings</label>
                        </li>
                        <li>
                            <input id="payments" type="radio" name="owner" value="Payments">
                            <label for="payments">Payments</label>
                        </li>
                    </ul>			
                </fieldset>

                <fieldset>
                    <legend>Describe your problem</legend>
                    <textarea name="comment" rows="4" cols="35" placeholder="Include as many details as possible"></textarea>
                </fieldset>

                <fieldset>
                    <legend>Everything ready?</legend>
                    <input type="submit" value="Send">
                    <input type="reset" value="Reset">
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

  } )
}
</script>