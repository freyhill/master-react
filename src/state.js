/********************
 * @file:state
 * @desc: 组件的状态控制
 * @author:leinov
 ********************/

 import React ,{Component} from 'react';

export default class State extends Component{
    constructor(props){
        super(props);
        console.log("props",props);
        this.state = {
            initValue : props.initValue
        }
        //this.getData = this.getData.bind(this);
    }
    getData(){
        console.log(1);
        console.log(this.state);
    }
    render(){
        this.getData();
        return (
            <div>{this.state.initValue}</div>
        )
    }
}
State.defaultProps = {
    initValue:0
}