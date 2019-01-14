/********************
 * @file:key
 * @desc: 数组动态渲染必须要设置key来区分每一项
 * @author:leinov
 ********************/

import React, { Component } from 'react';

export default class Key extends Component {
    
    
    render() {
       
        return (
            <div>
            {
                [1,2,3,4].map((val)=><li key={val}>{val}</li>)
            }
            </div>
        )

    }

}