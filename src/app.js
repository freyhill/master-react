/********************************
 * @file: home page
 * @desc: overview react multi page app
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React, { Component } from "react";
import A from "./a";
import jsx from './jsx';
import NormalComponent from './component';
var Greeting = require("./createClass.js");
import Key from './key'
export default class App extends Component {
	render() {
		
		return (
			<div>
				<Greeting />
				<NormalComponent name="haha" />
				{jsx}
				<Key/>
				<A inof="haha" />
			</div>
			
		);
	}
}
