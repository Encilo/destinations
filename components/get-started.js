import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Button from '../components/button';

const window = Dimensions.get("window");

export default class GetStartedScreen extends Component {

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
                source={require('../images/getstarted-bckgrd.jpg')}>
                <View style={{ flex: 5 }}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Great Places {"\n"}
                    </Text>
                    <Text style={styles.titleDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.paddingBottom50}>
                        <Button buttonStyle={this.state.pressStatus ? styles.buttonPress : styles.button}
                            textStyle={styles.buttonText}
                            buttonText={"Get started"}
                            clickHandler={this._getStartedClickHandler}
                            buttonShowUnderlay={this._onShowUnderlay}
                            buttonHideUnderlay={this._onHideUnderlay} />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "white",
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    buttonPress: {
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "transparent",
        backgroundColor: "#FFA103",
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    buttonText: {
        color: "white"
    },
    textContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 25
    },
    titleDescription: {
        textAlign: "center",
        width: (window.width * 80 / 100),
        color: "#A5A6AB",
        fontWeight: "bold"
    },
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    paddingBottom50: {
        paddingBottom: 50
    }
})
