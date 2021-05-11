import axios from "axios";
import { Notification, MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";
import errorCode from "@/utils/errorCode";

//处理的null的空值
/**
 * null => ''
 * @param {*} data 要处理的数据
 */
function null2str(data) {
  for (let x in data) {
    if (data[x] === null) {
      // 如果是null 把直接内容转为 ''
      data[x] = "";
    } else {
      if (Array.isArray(data[x])) {
        // 是数组遍历数组 递归继续处理
        data[x] = data[x].map((z) => {
          return null2str(z);
        });
      }
      if (typeof data[x] === "object") {
        // 是json 递归继续处理
        data[x] = null2str(data[x]);
      }
    }
  }
  return data;
}

export const AJAX_UTF8 = {
  "Content-Type": "application/json;charset=UTF-8",
};
export const FORM_URLENCODED = {
  "Content-Type": "application/x-www-form-urlencoded",
};
axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8";

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000,
});
// request拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (getToken() && !isToken) {
      config.headers["Authorization"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?";
      for (const propName of Object.keys(config.params)) {
        const value = config.params[propName];
        var part = encodeURIComponent(propName) + "=";
        if (value !== null && typeof value !== "undefined") {
          if (typeof value === "object") {
            for (const key of Object.keys(value)) {
              let params = propName + "[" + key + "]";
              var subPart = encodeURIComponent(params) + "=";
              url += subPart + encodeURIComponent(value[key]) + "&";
            }
          } else {
            url += part + encodeURIComponent(value) + "&";
          }
        }
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  async (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    if (code === 401) {
      MessageBox.confirm(
        "登录状态已过期，您可以继续留在该页面，或者重新登录",
        "系统提示",
        {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
        store.dispatch("LogOut").then(() => {
          location.href = "/index";
        });
      });
    } else if (code === 500) {
      Message({
        message: "(后端错误)" + msg,
        type: "error",
      });
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      Notification.error({
        title: msg,
      });
      return Promise.reject("error");
    } else {
      //主要对后端json字符串存在的null进行处理
      let nullChange = (await res.data.data) ? null2str(res.data.data) : {};
      let handleObjection = {};
      handleObjection = res.data;
      handleObjection.data = nullChange;
      console.log(handleObjection);
      return handleObjection;
      // console.log(res.data, '查看ajax核心');
      // return res.data;
    }
  },
  (error) => {
    console.log("err" + error);
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({
      message: message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
