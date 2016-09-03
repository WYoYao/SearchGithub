'use strict';
/*
 ES6    中需要两条语句
import App from './App';
export default App;
* /

/*
*ES7 中只需要一条语句就可以完成
 */

/*
    全部在这里暴露出去的好处就是在后面的方法中需要调用的时候只需要对这个一个文件进行解构赋值就好了
*/
'use strict';

export App from './App/index.jsx';
export Home from './Home/index.jsx';
export About from './About/index.jsx';
export Profile from './Profile';
