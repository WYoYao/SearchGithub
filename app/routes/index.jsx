import React from 'react';
//IndexRoute 首页的索引
import { Route, IndexRoute } from 'react-router';
/*
    containers:容器级组件存放的位置
    components:基础组件存放的位置
 */
//将containers引用的组件加载进来 然后返回一个routes组件
import { App, Home, About,Profile } from '../containers';

export default (
    /*
    *一个Route 对应的是一条路由
    访问的是 pathName 是/的时候访问的是App + Home
     */
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {/*
        如果访问的pathName 为 /about 的时候访问的是 App+about
    */}
    <Route path="about" component={About} />
    {/**
        添加一条新的路由然后调用Profile 组件
        后面是参数params
     */}
    <Route path="profile/:username" component={Profile} />
  </Route>
)