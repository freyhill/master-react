/********************
 * @file:portal
 * @desc: react16  cratePortal创建的组件 将节点渲染到父节点意外的地方
 * @author:leinov
 ********************/
import React from 'react';
import {createPortal} from 'react-dom';

export default class Dialog extends React.Component {
  constructor() {
    super(...arguments);
    const doc = window.document;
    this.node = doc.createElement("div");
    doc.body.appendChild(this.node);
  }

  render() {
    return createPortal(
      <div className={`${this.props.show? "show":"none"} dialog`}>
        {this.props.children}
      </div>, //塞进传送门的JSX
      this.node //传送门的另一端DOM node
    );
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
}