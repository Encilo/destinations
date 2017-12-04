import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableHighlight,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class Interest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected
        }

        this._renderInterest = this._renderInterest.bind(this);
        this._onPressHandler = this._onPressHandler.bind(this);
    }

    _onPressHandler() {
        this.setState({ selected: !this.state.selected });
    }

    _renderInterest() {
        if (this.state.selected)
            return (
                <TouchableHighlight style={[styles.selectedContainer, this.props.style]}
                    onPress={this._onPressHandler}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            {this.props.text}
                        </Text>
                        <View style={styles.iconContainerSelected}>
                            <Image source={require('../images/checkmark.png')} />
                        </View>
                    </View>
                </TouchableHighlight >
            );
        else
            return (
                <TouchableHighlight style={[styles.unSelectedContainer, this.props.style]}
                    onPress={this._onPressHandler}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            {this.props.text}
                        </Text>
                        <View style={styles.iconContainerUnSelected}>
                            <Text style={styles.iconUnselectedText}>+</Text>
                        </View>
                    </View>
                </TouchableHighlight >
            );
    }

    render() {
        return (
            <View>
                {this._renderInterest()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    selectedContainer: {
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "#FFA103",
        height: 35,
        justifyContent: "center",
        alignItems: "center"
    },
    unSelectedContainer: {
        borderWidth: 1,
        borderRadius: 35,
        borderColor: "#414649",
        height: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        color: "white",
        paddingLeft: 15,
        paddingRight: 15
    },
    iconContainerSelected: {
        borderWidth: 1,
        borderRadius: 50,
        height: 25,
        width: 25,
        backgroundColor: "#FFA103",
        marginRight: 5,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "transparent"
    },
    iconContainerUnSelected: {
        borderWidth: 1,
        borderRadius: 50,
        height: 25,
        width: 25,
        backgroundColor: "#414649",
        marginRight: 5,
        alignItems: "center",
        borderColor: "transparent"
    },
    iconUnselectedText: {
        color: "white",
        fontSize: 16
    }
})


function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Interest);