import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class AuthOptionsScreen extends Component {

    constructor(props) {
        super(props);

        this._increment = this._increment.bind(this);
    }

    _increment() {
        this.props.incrementCounter();
    }

    render() {
        return (
            <View>
                <Text>
                    Destinations BA
                </Text>
                <Text>
                    Counter: {this.props.counter}
                </Text>
                <TouchableHighlight onPress={this._increment}>
                    <Text>
                        Increment
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthOptionsScreen);