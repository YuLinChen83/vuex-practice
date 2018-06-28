# vuex-practice

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
---
* app 層級狀態都應集中在 store
* mutation 是改變 state 的唯一方法，並且為同步的
* 非同步操作都放在 actions 裡面

---
* getters 相當於 state 的 computed
    一般 vuex：getterFun(state, *getters*)
    模組module時（適用於state龐大拆分後）：getterFun(state, *getters, rootState, rootGetters*)
* mutationFun(state, *payload*)
* action(context)
* mutation 不能作非同步事件，應由 action call mutation 修改 store
* action 不能修改 state 要發用 commit 發出 mutation 來做修改
* mutation -> commit
  ation -> dispatch
* 非同步要放在 action (context(似store))，action 不能直接改 state 裡面的屬性
* 當有不同模組的 action 內方法名稱相同時，應改變funtion名稱或於模組內設定 namespacecd: true 就可指定 moduleName/mutationName
* mounted (component加入場景前) 時發出 action 請求 api，並在 action 得到資料時發出 mutation 改變 state