### 关于教程

* 本教程的 demo 是 redux 官网的demo 的 简版
* 删除了不必要的文件，并简化了代码，使代码逻辑更加简单易懂

### React 的数据流
  相信各位看到这个项目的时候，对react都已经有一定的了解了。为了大家更好的理解Redux,先带大家回顾一下React的数据流。
  在React中，数据是自顶向下单向流动的，即从父组件到子组件。这条原则让组件之间的关系变得简单且可预测。
  * state 在React中每个组件内部的状态称为state.当组件内部使用setState方法时，该组件会尝试重新渲染
  * props props是React用来让组件之间相互联系的一种机制。把组件看成一个函数，props就是它的参数
  
### React在大型应用中所面临的问题
 * 同级组件通信 当两个同级组件需要进行通信，共享对方的数据。然后这时候不通过DOM沟通（也就是React体制内）解决的唯一办法就是提升state，将state放到共有的父组  件中来管理，再作为props分发回子组件。
 * 子组件向父组件通信 子组件改变父组件state的办法只能是通过事件触发父组件声明好的回调，也就是父组件提前声明好函数或方法作为契约描述自己的state将如何变化，再将它同样作为属性交给子组件使用。这样就出现了一个模式：数据总是单向从顶层向下分发的，但是只有子组件回调在概念上可以回到state顶层影响数据。这样state一定程度上是响应式的。
  
### 什么是Redux
为了解决React中所面临的问题，最容易想到的办法就是把所有state集中放到所有组件顶层，然后分发给所有组件。这时就需要一个更好对state进行管理，需要一个库来作为更专业的顶层state分发给所有React应用，这就是Redux。
2014年 Facebook 提出了 Flux 架构的概念，引发了很多的实现。2015年，Redux 出现，将 Flux 与函数式编程结合一起，很短时间内就成为了最热门的前端架构。

### redux 基本概念
* Provider  // Provider作为顶层app的分发点，它只需要store属性就可以了。它会将state分发给所有被connect的组件。
* connect   // connect是一个科里化函数,用来连接React组件和Redux。传入对应的state和action等数据以及一个React组件，并返回一个新组件
* store     // store是一个js对象,负责存储应用的所有状态 
* state     // state表示应用当前的状态。可以通过store.getState()获得
* action    // action 是 用户通过 view层 发出的通知，表示 State 应该要发生变化了。
* Reducer   // reducer Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State
* combineReducers(reducers) // 随着应用变得复杂，需要对 reducer 函数 进行拆分，拆分后的每一块独立负责管理 state 的一部分。此方法接收一个reducer对象,并返回一个合并后的reudcer。

### Redux 的工作流程
用户发出 action > store 调用 reducer > reducer 返回一个新的state > 如果有监听函数，Store 就会调用监听函数 > React重新渲染页面 



### `npm start`

项目主页：[http://localhost:3000](http://localhost:3000) 

项目实现了热加载和错误提示.<br>
任何代码的更改都会自动更新到页面.


参考链接：https://www.zhihu.com/question/41312576/answer/90782136
