# douban

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 项目记录
## 配置路由
1.主导页 PagesView.vue , 此组件分为不变的头部组件HeaderBar.vue + 可变的内容部分
2.HeaderBar.vue 组件的html+css完成
3.可变的内容部分可以通过路由切换分别显示
  + HomeView.vue
  + MovieView.vue
  + BookView.vue
  + BroadcastView.vue
  + GroupView.vue
4.路由的切换的链接在对应的HeaderBar.vue

## HomeView


