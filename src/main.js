import Vue from 'vue'
//import App from './App.vue'
//import store from './store'
//import SearchLesson from './SearchLesson.vue'
//import FBLogin from './FBLogin.vue'
import InfiniteScrollApp from './InfiniteScrollApp.vue'

new Vue({
  el: '#app',
  //store,
  //render: h => h(App)
  render: h => h(InfiniteScrollApp)
})
