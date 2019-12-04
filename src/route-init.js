import Login from "@/components/Login.vue";
import OrderHistory from "@/components/OrderHistory.vue";
import StorePage from "@/components/StorePage.vue";
import Selling from "@/components/Selling";
import Inventory from "@/components/Inventory"
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/* Map path to component */
const routeTable = [
  { path: "/", component: Login },
  { path: "/OrderHistory", component: OrderHistory },
  { path: "/StorePage", component: StorePage },
  { path: "/SellPage", component: Selling },
  { path: "/Inventory", component: Inventory },
];

const AppRouter = new VueRouter({ routes: routeTable });
export { AppRouter };