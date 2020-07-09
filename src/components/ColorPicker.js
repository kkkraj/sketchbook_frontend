'use strict'

import React, {Component} from 'react'
import {SketchPicker} from 'react-color';

export default class Toolbox extends Component {
    render() {
        return (
            <div>
                < SketchPicker
                color={this.props.background}
                onChangeComplete={this.props.handleChangeComplete}
                / >
            </div>
        );
    }
}