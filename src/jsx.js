/*
 * @Author: leinov 
 * @Date: 2019-01-07 14:49:09 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-11 10:27:42
 * @desc : jsx
 */

import React, { Component } from "react";
const element = <h1> hello world</h1>;
var elment2 = React.createElement(
    "li",
    null,
    "React.createElement",
    React.createElement("p",null,"hahah",
        React.createElement("a",null,"xxx")
        )
)
export default elment2;