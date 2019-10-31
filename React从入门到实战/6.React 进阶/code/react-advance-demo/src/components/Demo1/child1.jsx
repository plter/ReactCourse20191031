import React from 'react';


/**
 * Component:不会对数据进行比较
 * PureComponent:对数据进行浅比较 props
 * 
 */
export default class Child1 extends React.PureComponent {

    render() {
        console.log("child1 -> render");
        return (
            <div>
                Child1:{ this.props.num }
            </div>
        );
    }
}

