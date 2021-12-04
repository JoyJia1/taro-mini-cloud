import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { Provider } from "react-redux";
import globalStore from "./store";
import "./app.scss";

const store = globalStore();

class App extends Component {
  componentDidMount() {
    Taro.cloud.init({
      env: 'cloud1-7gf04a0e7797fad1', // 获取环境ID：前往 云开发控制台-设置-环境ID
      traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
    })
    // this.getLogin();
  }

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: 'login',
      })
      .then(res => {
        Taro.setStorageSync('userInfo', res)
      });
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
