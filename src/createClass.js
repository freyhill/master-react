/********************************
 * @file: createClass.js
 * @desc: createClass的方式创建组件
 * @author: leinov
 *******************************/

/*
 * 1.使用 createClass的方式创建一个组件  多用于es5
 */
var React = require("react");
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
    render: function () {
        return ( 
            <p>
            这是用createClass的方式创建的组件 
            </p>
        )
    }
})
module.exports = Greeting;