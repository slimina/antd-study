## 按需加载

```javascript
Ant Design是蚂蚁金服基于react实现的一个UI 设计库，基于 npm + webpack + babel 的工作流，支持 ES2015。
而babel-plugin-import 可以从组件库中仅仅引入需要的模块，而不是把整个库都引入，从而提高性能。
 
如果使用 import { Button } from 'antd'; 的写法会引入 antd 下所有的模块。
 
为了提高打包编译的速度和浏览器下载资源的速度，可以通过以下的写法来只加载需要的组件：

　　import Button from 'antd/lib/button';
　　import 'antd/lib/button/style'; 
 
更好的办法是使用 babel，用 babel-plugin-import 来实现同样的按需加载效果：
 
　　1,安装插件  cnpm i babel-plugin-import --save-dev 
 
　　2,修改 .babelrc文件，在plugins节点下，添加下面这个配置项：
 

　　{
　　　　"plugins": ["transform-runtime", ["import", { "libraryName": "antd", "style": true }]]
　　}
 
现在插件会帮你转换成 antd/lib/xxx 的写法了，同时因为设置了 style 属性，模块样式也可以按需自动加载，不需要再手动引入css或less文件了。
所以只需要这样写：
 
　　import { Button } from 'antd';
```