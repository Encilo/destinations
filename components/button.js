import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

export default class Button extends Component {
    
    render() {
        return (
            <TouchableHighlight style={this.props.buttonStyle}
                onPress={this.props.clickHandler}
                underlayColor={this.props.buttonUnderlayColor}
                onShowUnderlay={this.props.buttonShowUnderlay}
                onHideUnderlay={this.props.buttonHideUnderlay} >
                <Text style={this.props.textStyle}>
                    {this.props.buttonText}
                </Text>
            </TouchableHighlight >
        )
    }
}