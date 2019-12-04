import Login from "@/components/Login.vue";
import StorePage from "@/components/StorePage.vue";
import Selling from "@/components/Selling";
import Vue from "vue";
import VueRouter from "vue-router";
import StorePage4 from "@/components/StorePage4";
import StorePage5 from "@/components/StorePage5";
import Inventory from "@/components/Inventory";
import OrderHistory from "@/components/OrderHistory";

Vue.use(VueRouter);
/* Map path to component */
const routeTable = [
  { path: "/", component: Login },
  { path: "/OrderHistory", component: OrderHistory },
  { path: "/StorePage", component: StorePage },
  { path: "/SellPage", component: Selling },
  { path: "/Contact", component: StorePage4 },
  { path: "/Support", component: StorePage5 },
  { path: "/Inventory", component: Inventory},
  { path: "/MyAccount", component: OrderHistory }
];

const AppRouter = new VueRouter({ routes: routeTable, 
  base: process.env.NODE_ENV === "production"
  ? "/~hallwati/proj/my-store/"
  : "/"});
export { AppRouter };