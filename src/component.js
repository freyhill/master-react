/*
 * @Author: leinov 
 * @Date: 2019-01-07 15:42:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-07 20:00:01
 */

import React, { Component } from 'react';

export default class NormalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        this.clickMe = this.clickMe.bind(this);
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.name != nextProps.name) {
            return true
        }
        if (this.state.count != nextState.count) {
            return true;
        }
        return false;
    }
    clickMe() {
        this.setState({ count: 2 });
    }
    componentDidMount() {
        console.log("did", this.state);
    }
    render() {
        console.log(this.state);
        console.log("component渲染了");
        return (
            <div>
                <button onClick={this.clickMe}>点击更改</button>
            </div>
        )

    }

}