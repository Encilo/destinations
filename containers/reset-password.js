import React, { Component } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Button from '../components/button';
import Logo from '../components/logo';

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
        this._focusConfirmPassword = this._focusConfirmPassword.bind(this);
    }

    _focusConfirmPassword(){
        this.refs.cpwd.focus();
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
                <View style={styles.codeContainer}>
                    <KeyboardAvoidingView behavior="position">
                        <TextInput style={styles.input}
                            placeholder="Code"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            keyboardType="numeric"
                            returnKeyType="go"
                            onSubmitEditing={this._codeSubmitButtonClickHandler} />
                        <Button
                            buttonStyle={this.state.codeSubmitButtonPressed ? styles.buttonPressed : styles.button}
                            textStyle={styles.buttonText}
                            buttonText={"Submit"}
                            clickHandler={this._codeSubmitButtonClickHandler}
                            buttonShowUnderlay={this._onShowUnderlayCodeSubmit}
                            buttonHideUnderlay={this._onHideUnderlayCodeSubmit} />
                    </KeyboardAvoidingView>
                </View>
            );
    }

    _renderResetPassword() {
        if (this.state.codeValid)
            return (
                <View style={styles.passwordContainer}>
                    <KeyboardAvoidingView behavior="position">
                        <TextInput style={styles.input}
                            placeholder="New password"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            returnKeyType="next"
                            secureTextEntry={true}
                            onSubmitEditing={this._focusConfirmPassword}
                            blurOnSubmit={false}
                        />
                        <TextInput style={styles.input}
                            ref="cpwd"
                            placeholder="Repeat password"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            returnKeyType="go"
                            onSubmitEditing={this._resetPasswordButtonClickHandler} />
                        <Button
                            buttonStyle={this.state.resetPasswordButtonPressed ? styles.buttonPressed : styles.button}
                            textStyle={styles.buttonText}
                            buttonText={"Save and log me in"}
                            clickHandler={this._resetPasswordButtonClickHandler}
                            buttonShowUnderlay={this._onShowUnderlayResetPassword}
                            buttonHideUnderlay={this._onHideUnderlayResetPassword} />
                    </KeyboardAvoidingView>
                </View>
            );
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                source={require("../images/authoptions-bckgrd.jpg")}>
                <View style={[styles.row, styles.headerContainer]}>
                    <Logo />
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
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 20,
        width: (window.width * 70 / 100),
        height: 50,
        color: "white"
    },
    button: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#FFA103",
        borderColor: "transparent",
        width: (window.width * 70 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        marginTop: 20
    },
    buttonPressed: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#ce8100",
        borderColor: "transparent",
        width: (window.width * 70 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        marginTop: 20
    },
    buttonText: {
        color: "white"
    },
    codeContainer: {
        flex: 5,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    passwordContainer: {
        flex: 5,
        justifyContent: "flex-start",
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