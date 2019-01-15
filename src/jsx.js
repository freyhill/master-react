/********************
 * @file:jsx
 * @author: 创建jsx方式的方式
 * @date: 2018-10-08
 ********************/
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