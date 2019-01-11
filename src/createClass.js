/*
 * @Author: leinov 
 * @Date: 2019-01-07 15:33:05 
 * @Last Modified by: leinov
 * @Last Modified time: 2019-01-07 15:40:31
 */

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