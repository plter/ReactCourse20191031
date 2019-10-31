import React from "react"

export default class ProxyDemo extends React.Component{

    /**
     * https://yunp.top/blog/index.php/2016/05/12/44/
     * 
     * http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0
     */

     /**
      * 跨域的解决方案：
      *     开发模式下：
      *         利用环境解决：react  vue常用框架，都提供了解决方案
      *     生产模式下：
      *         jsonp cors  iframe postMessage...
      * 
      * 
      *     npm run build:打包 -> 生产模式
      */
    // https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md

    componentDidMount(){
        // proxy:http://tingapi.ting.baidu.com
        // fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data);
        // })
        // // 失败了
        // .catch(error =>{
        //     console.log(new Error(error));
        // })

        // fetch("/api/list")
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data);
        // })
    }

    
    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}