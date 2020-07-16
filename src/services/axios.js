import axios from "axios";
// import { Object } from "core-js";
import { baseURL } from "@/utils/utils";
// import Vue from "vue";
import { Message } from "element-ui";

const ContentType = {
  urlencoded: "application/x-www-form-urlencoded;charset=UTF-8",
  json: "application/json",
  formData: "multipart/form-data",
};

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = false;
axios.defaults.responseType = "json";
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";

axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] =
      ContentType[config.data instanceof FormData ? "formData" : "json"];
    config.headers["token"] =window.sessionStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      if (res.data.data) {
        return res.data.data;
      } else {
        Message.error(res.data.resultMsg);
        return false;
      }
    } else if (res.status === 401 || res.status === 403) {
      Message.error("登录过期或权限不足, 请重新登陆!");
      return false;
    } else if (res.status === 500) {
      Message.error("请求数据失败, 请重试!");
      console.log(res);
      return false;
    }
    return res;
  },
  (error) => {
    const msg = error.message;
    const result = error.response;
    if (result && result.data) {
      const { data } = result;
      Message.error(data);
    } else if (msg) {
      if (msg === "Network Error") {
        Message.error("网络错误,请检查网络!");
      } else {
        Message.error(msg);
      }
    } else {
      Message.error("未知错误,请重试!");
    }
    console.log(error.toJSON());
    return Promise.reject(error);
  }
);

export default axios;
