import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ImageBackground, TouchableHighlight, Dimensions
} from 'react-native';
import Button from '../components/button';

const window = Dimensions.get("window");

export default class WelcomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            exploreButtonPressed: false,
            discoverButtonPressed: false
        }

        this._exploreButtonClickHandler = this._exploreButtonClickHandler.bind(this);
        this._discoverButtonClickHandler = this._discoverButtonClickHandler.bind(this);
        this._onShowUnderlay = this._onShowUnderlay.bind(this);
        this._onHideUnderlay = this._onHideUnderlay.bind(this);
        this._onShowUnderlayDiscover = this._onShowUnderlayDiscover.bind(this);
        this._onHideUnderlayDiscover = this._onHideUnderlayDiscover.bind(this);
    }

    _exploreButtonClickHandler() {

    }

    _discoverButtonClickHandler() {

    }

    _onShowUnderlay(type) {
        this.setState({ exploreButtonPressed: true });
    }

    _onHideUnderlay(type) {
        this.setState({ exploreButtonPressed: false });
    }

    _onShowUnderlayDiscover() {
        this.setState({ discoverButtonPressed: true });
    }

    _onHideUnderlayDiscover() {
        this.setState({ discoverButtonPressed: false });
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                source={require('../images/welcome-bckgrd.jpg')}>
                <View style={{ flex: 6 }}></View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Welcome!
                    </Text>
                    <Text style={styles.titleDescription}>
                        You can now start using this application. We {"\n"}
                        wish you a happy trip and enjoy your stay!
                    </Text>
                </View>
                <View style={styles.exploreButtonContainer}>
                    <Button
                        buttonStyle={this.state.exploreButtonPressed ? styles.exploreButtonPressed : styles.exploreButton}
                        textStyle={styles.exploreButtonText}
                        buttonText={"Explore nearby locations"}
                        clickHandler={this._exploreButtonClickHandler}
                        buttonShowUnderlay={this._onShowUnderlay}
                        buttonHideUnderlay={this._onHideUnderlay} />
                </View>
                <View style={styles.discoverButtonContainer}>
                    <Button
                        buttonStyle={this.state.discoverButtonPressed ? styles.discoverButtonPressed : styles.discoverButton}
                        textStyle={styles.discoverButtonText}
                        buttonText={"Discover Bosnia and Herzegovina"}
                        clickHandler={this._discoverButtonClickHandler}
                        buttonShowUnderlay={this._onShowUnderlayDiscover}
                        buttonHideUnderlay={this._onHideUnderlayDiscover} />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 24
    },
    titleDescription: {
        color: "white",
        marginTop: 20,
        fontSize: 16,
        textAlign: "center"
    },
    exploreButton: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#FFA103",
        borderColor: "transparent",
        width: (window.width / 1.2),
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    exploreButtonPressed: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#ce8100",
        borderColor: "transparent",
        width: (window.width / 1.2),
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    discoverButton: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 40,
        width: (window.width / 1.2),
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        marginTop: 20
    },
    discoverButtonPressed: {
        borderColor: "transparent",
        borderRadius: 40,
        backgroundColor: "#FFA103",
        width: (window.width / 1.2),
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        marginTop: 20
    },
    exploreButtonText: {
        color: "white"
    },
    discoverButtonText: {
        color: "white"
    },
    buttonsContainer: {
        marginBottom: 40
    },
    titleContainer: {
        flex: 3,
    },
    exploreButtonContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "flex-end"
    },
    discoverButtonContainer: {
        marginBottom: 40, 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "flex-start"
    }
})

