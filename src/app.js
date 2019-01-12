/********************************
 * @file: home page
 * @desc: overview react multi page app
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React, { Component } from "react";
import A from "./a";
import Button from "./button"
import State from './state';
export default class App extends Component {
	alert(){
		alert(1);
	}
	render() {
		
		return (
			<div>
				<Button title={this.props.appValue} type="primary" onClick={this.alert}/>
				<State initValue={this.props.appValue} />
				<A inof="haha" />
			</div>
			
		);
	}
}
App.defaultProps = {
	appValue:"这是一个default"
}