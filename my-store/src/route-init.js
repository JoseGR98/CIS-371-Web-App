import Login from "@/components/Login.vue";
import OrderHistory from "@/components/OrderHistory.vue";
import StorePage from "@/components/StorePage.vue";
import StorePage2 from "@/components/StorePage2.vue";
import StorePage3 from "@/components/StorePage3.vue";
import StorePage4 from "@/components/StorePage4.vue";
import StorePage5 from "@/components/StorePage5.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/* Map path to component */
const routeTable = [
  { path: "/", component: Login },
  { path: "/OrderHistory", component: OrderHistory },
  { path: "/Home", component: StorePage },
  { path: "/Deals", component: StorePage2 },
  { path: "/Sell", component: StorePage3 },
  { path: "/Contact", component: StorePage4 },
  { path: "/Support", component: StorePage5 }
];

const AppRouter = new VueRouter({ routes: routeTable });
export { AppRouter };