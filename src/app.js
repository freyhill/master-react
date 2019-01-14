/********************************
 * @file: app.js
 * @desc: 主引页面
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React, { Component } from "react";
import A from "./a";
import Button from "./button"
import State from './state';
import NormalComponent from './component';
import Greeting from './createClass';
import Render from './render';
import Dialog from './portal';
import Attributes from './attributes';
export default class App extends Component {
	constructor(props){
		super(props);
		this.state={
			dshow:false
		}
		this.showD = this.showD.bind(this);
		// 查看环境变量
		console.log(process.env.NODE_ENV);
	}
	showD(){
		this.setState({dshow:true})
	}
	render() {
		
		return (
			<div>
				<Button title={this.props.appValue} type="primary" onClick={this.showD}/>
				<State initValue={this.props.appValue} />
				<A inof="haha" />
				<NormalComponent />
				<Greeting />
				<Render />
				<Dialog key="2" show={this.state.dshow}>这是一个提示框</Dialog>
				<Attributes />
			</div>
			)
	}
}
App.defaultProps = {
	appValue:"显示弹层"
}