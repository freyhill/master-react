/* eslint-disable no-console */
/********************************
 * @file: home page
 * @desc: overview react multi page app
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React, { Component } from "react";

export default class A extends Component {
	constructor(){
		super();
		this.state={
			name:"leinov"
		};
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log("props",this.props,nextProps);
		console.log("state",this.state,nextState);
		if(nextState.name==this.state.name){
			console.log("不用重新渲染啦");
			return false;
		}else{
			return true;
		}
	}
	add(){ // setState是异步执行的
		this.setState((preState,props)=>{
			console.log(preState,props);
			return {name:"hahah"};
		},()=>{console.log("2",this.state);});
		console.log("1",this.state); // {name: "leinov"}
	}
	render() {
		console.log("render执行");
		return (
			<div>
				<div onClick={()=>{this.add();}}>{this.state.name}</div>
			</div>
			
		);
	}
}
