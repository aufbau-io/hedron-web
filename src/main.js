import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App"
import store from "./store"
import MainPage from "./components/MainPage"

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage
    }
  ]
})

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount("#app")
