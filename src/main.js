import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { imgserver } from "@/utils/utils";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import VideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
Vue.use(VideoPlayer);

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require("./assets/img/error.png"),
  //加载时显示的GIF图
  loading: require("./assets/img/loading.gif"),
  //尝试加载几次
  attempt: 2,
});

Vue.config.productionTip = false;

// 图片服务器地址
Vue.prototype.imgserver = imgserver;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
