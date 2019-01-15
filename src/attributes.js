/********************************
 * @file: attributes.js
 * @desc: react16可以自定义标签属性
 * @author: leinov
 *******************************/

import React , {Component} from 'react';
export default class Attributes extends Component{
    constructor(props){
        super(props);
        this.showAtt = this.showAtt.bind(this);
    }
    showAtt(e){
        console.log(e.currentTarget.getAttribute("myattr"));
    }
    render(){
        return (
            <div myattr="这是一个属性" onClick={this.showAtt}>点击我看我的属性</div>
        )
    }
}