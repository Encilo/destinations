import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Dimensions } from 'react-native';
import CheckBox from 'react-native-checkbox';
import Button from '../components/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const window = Dimensions.get("window");

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rememberMe: true,
            loginPressed: false
        }

        this._rememberMeClickHandler = this._rememberMeClickHandler.bind(this);
        this._forgotPasswordClickHandler = this._forgotPasswordClickHandler.bind(this);
        this._loginButtonClickHandler = this._loginButtonClickHandler.bind(this);
        this._onShowUnderlay = this._onShowUnderlay.bind(this);
        this._onHideUnderlay = this._onHideUnderlay.bind(this);
        this._focusPasswordField = this._focusPasswordField.bind(this);
    }

    _rememberMeClickHandler() {
        this.setState({ rememberMe: !this.state.rememberMe })
    }

    _forgotPasswordClickHandler() {
        this.props.openForgotPasswordModal();
    }

    _loginButtonClickHandler() {
        // Just for testing purposes
        this.props.navigation.navigate("Welcome");
    }

    _onHideUnderlay() {
        this.setState({ loginPressed: false });
    }

    _onShowUnderlay() {
        this.setState({ loginPressed: true });
    }

    _focusPasswordField() {
        this.refs.pwd.focus();
    }

    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <TextInput style={this.props.usernameInputStyle}
                    placeholder="Username"
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={this._focusPasswordField}
                    blurOnSubmit={false}
                />
                <TextInput style={this.props.passwordInputStyle}
                    ref="pwd"
                    placeholder="Password"
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    returnKeyType="go"
                    onSubmitEditing={this._loginButtonClickHandler}
                />
                <View style={[styles.row, styles.marginTop10, { width: (window.width * 80 / 100) }]}>
                    <View style={{ flex: 1 }}>
                        <CheckBox checkboxStyle={styles.checkBoxStyle}
                            labelStyle={styles.checkboxLabel}
                            label="Remember me"
                            checked={this.state.rememberMe}
                            checkedImage={require('../images/checkmark.png')}
                            onChange={this._rememberMeClickHandler} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight
                            onPress={this._forgotPasswordClickHandler}
                            underlayColor="transparent" >
                            <Text style={styles.forgotPwdLink}>
                                Forgot password?
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.marginTop10}>
                    <Button
                        buttonStyle={this.state.loginPressed ? styles.loginButtonPressed : styles.loginButton}
                        textStyle={styles.loginButtonText}
                        buttonText={"Login"}
                        clickHandler={this._loginButtonClickHandler}
                        buttonShowUnderlay={this._onShowUnderlay}
                        buttonHideUnderlay={this._onHideUnderlay} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    marginTop10: {
        marginTop: 10
    },
    checkBoxStyle: {
        borderColor: "white",
        borderWidth: 1,
        height: 20,
        width: 20,
        borderRadius: 4
    },
    checkboxLabel: {
        color: "white",
        paddingTop: 3,
        fontSize: 14
    },
    forgotPwdLink: {
        color: "white",
        textAlign: "right"
    },
    loginButtonPressed: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#ce8100",
        borderColor: "transparent",
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    loginButton: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#FFA103",
        borderColor: "transparent",
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    loginButtonText: {
        color: "white"
    },
})

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);