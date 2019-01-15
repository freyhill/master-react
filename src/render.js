/**
 * @file render
 * @desc:react16可以直接在组件里返回字符串和数组
 */

import React, {Component} from 'react';
export default class Render extends Component{
    render(){
        
        return [
            <div key="1">1</div>,
            <div key="2">2</div>
        ]
        // return [1,2,3,4];
        // return "这是一个字符串"
    }
}