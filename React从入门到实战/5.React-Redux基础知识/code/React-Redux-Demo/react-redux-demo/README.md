Redux:
    参考地址：
        http://cn.redux.js.org/index.html
        http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
    基础知识点：
        React中，状态数据，state
        组件与组件之间可以传递数据：props、回传事件
        兄弟之间组件传递数据：共同的子元素或者共同的父元素（大量的组件需要视同同一条数据）
    如果你不知道什么时候需要使用Redux，就是你不需要使用它，当你遇到解决不了的问题，自然回想起Redux

    redux和react-redux的区别
        redux：js的状态管理 createStore
        react-redux：为了在react中容易的使用：connect provider
    1.安装
        npm install --save-dev redux
        npm install --save-dev react-redux

    2.调试流程
        1.chorme浏览器需要安装插件：Redux DevTools
        2.安装依赖
            npm install --save-dev redux-devtools-extension