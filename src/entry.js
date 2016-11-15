import "./assets/common.css";
import "./assets/common.js";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./app.vue";
import MainHeader from "./components/header.vue";
import MainFooter from "./components/footer.vue";

Vue.use(VueRouter);
Vue.component("main-header",MainHeader);
Vue.component("main-footer",MainFooter);
const Default = { template: '<div class="default">default</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/library', component: require("./pages/library.vue") },
    { path: '/rank', component: require("./pages/rank.vue")},
    { path: '/complete', component: require("./pages/complete.vue")},
    { path: '/recharge', component: require("./pages/recharge.vue")},
    { path: '/bookshelf', component: require("./pages/bookshelf.vue")}
  ]
})
new Vue({
  router,
  render:h=>h(App)
}).$mount("#app")
