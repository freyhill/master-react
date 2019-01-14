/*
 * @Author: leinov 
 * @Date: 2019-01-07 15:42:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-07 20:08:12
 */

import React, { Component } from 'react';

export default class PurseComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        this.clickMe = this.clickMe.bind(this);
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    }
    
    clickMe() {
        this.setState({ count: 2 });
    }
    componentDidMount() {
        console.log("did", this.state);
    }
    render() {
        <button
        name={this.props.name}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    }
}