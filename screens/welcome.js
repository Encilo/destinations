import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class WelcomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pressStatus: false
        }

        this._getStartedClickHandler = this._getStartedClickHandler.bind(this);
        this._onHideUnderlay = this._onHideUnderlay.bind(this);
        this._onShowUnderlay = this._onShowUnderlay.bind(this);
    }

    _getStartedClickHandler() {
        this.props.navigation.navigate("AuthOptions");
    }

    _onHideUnderlay() {
        this.setState({ pressStatus: false });
    }

    _onShowUnderlay() {
        this.setState({ pressStatus: true });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>
                    Great Places
                    </Text>
                <Text style={styles.textDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                <Button buttonStyle={this.state.pressStatus ? styles.buttonPress : styles.button}
                    textStyle={this.state.pressStatus ? styles.buttonTextPress : styles.buttonText}
                    buttonText={"Get started"}
                    clickHandler={this._getStartedClickHandler}
                    buttonShowUnderlay={this._onShowUnderlay}
                    buttonHideUnderlay={this._onHideUnderlay} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    background: {

    },
    textTitle: {
        marginTop: 300,
        fontSize: 24,
        color: "black"
    },
    textDescription: {
        paddingTop: 30,
        paddingLeft: 40,
        paddingRight: 40,
        color: "gray"
    },
    button: {
        marginTop: 100,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "black"
    },
    buttonPress: {
        marginTop: 100,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "gray",
        backgroundColor: "#FFA103"
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 100,
        paddingLeft: 100,
        color: "gray"
    },
    buttonTextPress: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 100,
        paddingLeft: 100,
        color: "white"
    }
})

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);