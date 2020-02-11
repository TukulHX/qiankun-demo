import Vue from 'vue'
import MainApp from './App.vue'
import router from './router'
import Ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// qiankun config
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false
Vue.use(Ant)
let app = null
async function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(MainApp, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}


function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render({ appContent: '', loading: true })
}
// 在这里初始化启动主项目
initApp()

registerMicroApps(
  [
    // name和子项目package.json中的name保持一致
    { name: 'react16', entry: '//localhost:3000', render, activeRule: genActiveRule('/react') },
  ],
  {
    beforeLoad: [
      app => {
        console.log("before load", app);
      }
    ], // 挂载前回调
    beforeMount: [
      app => {
        console.log("before mount", app);
      }
    ], // 挂载后回调
    afterUnmount: [
      app => {
        console.log("after unload", app);
      }
    ] // 卸载后回调
  })

start();
