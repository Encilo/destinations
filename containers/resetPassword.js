import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Button from '../components/button';

const window = Dimensions.get("window");

class ResetPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            codeValid: false,
            codeSubmitButtonPressed: false,
            resetPasswordButtonPressed: false
        }

        this._renderCode = this._renderCode.bind(this);
        this._codeSubmitButtonClickHandler = this._codeSubmitButtonClickHandler.bind(this);
        this._onShowUnderlayCodeSubmit = this._onShowUnderlayCodeSubmit.bind(this);
        this._onHideUnderlayCodeSubmit = this._onHideUnderlayCodeSubmit.bind(this);
        this._resetPasswordButtonClickHandler = this._resetPasswordButtonClickHandler.bind(this);
        this._onShowUnderlayResetPassword = this._onShowUnderlayResetPassword.bind(this);
        this._onHideUnderlayResetPassword = this._onHideUnderlayResetPassword.bind(this);
    }

    _codeSubmitButtonClickHandler() {
        // Just for testing purposes
        this.setState({ codeValid: true });
    }

    _onShowUnderlayCodeSubmit() {
        this.setState({ codeSubmitButtonPressed: true });
    }

    _onHideUnderlayCodeSubmit() {
        this.setState({ codeSubmitButtonPressed: false });
    }

    _resetPasswordButtonClickHandler() {

    }

    _onShowUnderlayResetPassword() {
        this.setState({ resetPasswordButtonPressed: true });
    }

    _onHideUnderlayResetPassword() {
        this.setState({ resetPasswordButtonPressed: false });
    }

    _renderCode() {
        if (!this.state.codeValid)
            return (
                <KeyboardAvoidingView behavior="position">
                    <View style={[styles.center, {}]}>
                        <TextInput style={styles.input}
                            placeholder="Code"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent" />
                        <Button
                            buttonStyle={this.state.codeSubmitButtonPressed ? styles.buttonPressed : styles.button}
                            textStyle={styles.buttonText}
                            buttonText={"Submit"}
                            clickHandler={this._codeSubmitButtonClickHandler}
                            buttonShowUnderlay={this._onShowUnderlayCodeSubmit}
                            buttonHideUnderlay={this._onHideUnderlayCodeSubmit} />
                    </View>
                </KeyboardAvoidingView>
            );
    }

    _renderResetPassword() {
        if (this.state.codeValid)
            return (
                <KeyboardAvoidingView behavior="position">
                    <View style={[styles.center, {}]}>
                        <TextInput style={styles.input}
                            placeholder="New password"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            returnKeyType="next"
                            secureTextEntry={true}
                            onSubmitEditing={() => { this.refs.cpwd.focus() }} />
                        <TextInput style={styles.input}
                            ref="cpwd"
                            placeholder="Repeat password"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            returnKeyType="go" />
                        <Button
                            buttonStyle={this.state.resetPasswordButtonPressed ? styles.buttonPressed : styles.button}
                            textStyle={styles.buttonText}
                            buttonText={"Save and log me in"}
                            clickHandler={this._resetPasswordButtonClickHandler}
                            buttonShowUnderlay={this._onShowUnderlayResetPassword}
                            buttonHideUnderlay={this._onHideUnderlayResetPassword} />
                    </View>
                </KeyboardAvoidingView>
            );
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                source={require("../images/authoptions-bckgrd.jpg")}>
                <View style={[styles.row, styles.headerContainer]}>
                    <View>
                        <Text style={styles.title}>
                            DESTINATIONS {"\n"}
                        </Text>
                        <Text style={styles.titleSubtitle}>
                            Discover Bosnia and Herzegovina
                        </Text>
                    </View>
                    <View style={styles.rectangleContainer}>
                        <Text style={styles.rectangleContent}>
                            BA
                        </Text>
                    </View>
                </View>
                {this._renderCode()}
                {this._renderResetPassword()}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    headerContainer: {
        height: (window.height / 4),
        marginTop: (window.height / 4) / 2
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 25
    },
    titleSubtitle: {
        fontSize: 9,
        paddingLeft: 30,
        color: "white"
    },
    rectangleContainer: {
        width: 40,
        height: 40,
        backgroundColor: "#FFA103",
        marginTop: 5
    },
    rectangleContent: {
        color: "white",
        paddingLeft: 11,
        paddingTop: 11
    },
    input: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 20,
        width: (window.width / 1.5),
        height: 40,
        color: "white"
    },
    button: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#FFA103",
        borderColor: "transparent",
        width: (window.width / 1.5),
        alignItems: "center",
        height: 40,
        justifyContent: "center",
        marginTop: 20
    },
    buttonPressed: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#ce8100",
        borderColor: "transparent",
        width: (window.width / 1.5),
        alignItems: "center",
        height: 40,
        justifyContent: "center",
        marginTop: 20
    },
    buttonText: {
        color: "white"
    },
    center: {
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);