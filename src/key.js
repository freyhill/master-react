/*
 * @Author: leinov 
 * @Date: 2019-01-07 15:42:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-11 10:29:59
 */

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