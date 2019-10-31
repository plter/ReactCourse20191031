import React from "react"

export default class LoadMore extends React.Component {

    constructor() {
        super();
        this.load = React.createRef();
    }


    /**
     * 监听页面滚动事件
     */

    componentDidMount() {
        console.log("这里触发了");
        
        const _this = this;
        let timer = null;
        // 获取页面高度
        const winHeight = document.documentElement.clientHeight;
        window.onscroll = function (event) {
            // getBoundingClientRect:对象
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function(){
                if (_this.load.current.getBoundingClientRect().top < winHeight) {
                    // 该加载数据的时候
                    _this.props.onLoadMore();
                }
            },100)
        }

    }

    componentWillUnmount(){
        // 取消滚动事件
        window.onscroll = null;
    }

    render() {
        return (
            <div ref={this.load}>
                加载更多
            </div>
        )
    }
}