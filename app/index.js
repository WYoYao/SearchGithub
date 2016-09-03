import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import routes from './routes/index.jsx';
import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
//因为引入的路由的情况，就需要开先挂载路由，而不是对应的App组件，App组件挂载在路由的下面
/*
    *使用bowserHistory 在使用webpack 启动的时候需要 historyApiFallback: true, 需要添加这个参数
    使用命令行启动的时候需要添加 webpack-dev-server --history-api-fallback
 */
render(
  <Router routes={routes} history={browserHistory} />, root
);
//48.52