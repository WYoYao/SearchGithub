import React from 'react';
//引入SearchGithub 组件
import { SearchGithub } from '../../components';


/**
 * 这里不需要任何的业务逻辑处理，只是单纯的渲染的内容，所以直接使用对应的const 返回一个函数就好了
 */
//这个地方的参数相当于传入的参数 this.props,然后解构赋值，这个地方的props 是从对应的routes 那里拿到的
const App = ({children, history}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGithub history={history}/>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default App