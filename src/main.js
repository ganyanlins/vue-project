import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routes from './routes'; // Array

Vue.use(VueResource); //http请求注册
Vue.use(VueRouter); //路由注册

console.log(routes)

// 实例化路由
const router = new VueRouter({
    // mode: 'history', //H5 路由模式，需要服务端做渲染防止404错误
    base: __dirname,
    linkActiveClass: 'on',
    routes
});

let render = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});

// render;

if (module.hot) {
    module.hot.accept(App, () => render);
}
