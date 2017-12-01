import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Button from '../components/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const window = Dimensions.get("window");

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
            <ImageBackground style={styles.container}
                source={require('../images/welcome-bckgrd.jpg')}>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>
                        Great Places
                    </Text>
                    <Text style={styles.textDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <Button buttonStyle={this.state.pressStatus ? styles.buttonPress : styles.button}
                        textStyle={styles.buttonText}
                        buttonText={"Get started"}
                        clickHandler={this._getStartedClickHandler}
                        buttonShowUnderlay={this._onShowUnderlay}
                        buttonHideUnderlay={this._onHideUnderlay} />
                </View>
            </ImageBackground>
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
    textTitle: {
        fontSize: 24,
        color: "white",
    },
    textDescription: {
        color: "white",
        width: (window.width / 1.3),
        marginTop: (window.height / 40)
    },
    button: {
        marginTop: (window.height / 10),
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "white",
        width: (window.width / 1.3),
        alignItems: "center"
    },
    buttonPress: {
        marginTop: (window.height / 10),
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "white",
        backgroundColor: "#FFA103",
        width: (window.width / 1.3),
        alignItems: "center"
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        color: "white"
    },
    textContainer: {
        marginTop: (window.height / 2),
        alignItems: "center"
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