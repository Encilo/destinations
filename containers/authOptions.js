import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ImageBackground, TextInput, TouchableHighlight
    , KeyboardAvoidingView, Image, Dimensions
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Button from '../components/button';
import ForgotPasswordModal from '../containers/forgotPasswordModal'

const window = Dimensions.get("window");

class AuthOptionsScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rememberMe: true,
            loginPressed: false,
            signupPressed: false
        }

        this._rememberMeClickHandler = this._rememberMeClickHandler.bind(this);
        this._forgotPasswordClickHandler = this._forgotPasswordClickHandler.bind(this);
        this._loginButtonClickHandler = this._loginButtonClickHandler.bind(this);
        this._onShowUnderlay = this._onShowUnderlay.bind(this);
        this._onHideUnderlay = this._onHideUnderlay.bind(this);
        this._onHideUnderlaySignup = this._onHideUnderlaySignup.bind(this);
        this._onShowUnderlaySignup = this._onShowUnderlaySignup.bind(this);
        this._facebookIconClickHandler = this._facebookIconClickHandler.bind(this);
        this._twitterIconClickHandler = this._twitterIconClickHandler.bind(this);
        this._signupButtonClickHandler = this._signupButtonClickHandler.bind(this);
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

    _onHideUnderlaySignup() {
        this.setState({ signupPressed: false });
    }

    _onShowUnderlaySignup() {
        this.setState({ signupPressed: true });
    }

    _facebookIconClickHandler() {

    }

    _twitterIconClickHandler() {

    }

    _signupButtonClickHandler() {

    }

    render() {
        return (
            <ImageBackground style={styles.container}
                source={require('../images/authoptions-bckgrd.jpg')}>
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
                <KeyboardAvoidingView behavior="padding">
                    <View style={[styles.rowHeight, { alignItems: "center" }]}>
                        <TextInput style={styles.usernameInput}
                            placeholder="Username"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onSubmitEditing={() => { this.refs.pwd.focus() }} />
                        <TextInput style={styles.passwordInput}
                            ref="pwd"
                            placeholder="Password"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            returnKeyType="go" />
                        <View style={[styles.row, styles.marginTop10, { width: (window.width / 1.2) }]}>
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
                </KeyboardAvoidingView>
                <View style={[styles.rowHeight, { alignItems: "center" }]}>
                    <Text style={styles.connectLabel}>
                        or connect with
                    </Text>
                    <View style={[styles.row, { marginTop: (window.height / 3) / 6 }]}>
                        <TouchableHighlight style={styles.facebookIcon}
                            onPress={this._facebookIconClickHandler}>
                            <Image source={require('../images/facebook.png')} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.twitterIcon}
                            onPress={this._twitterIconClickHandler}>
                            <Image source={require('../images/twitter.png')} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ marginTop: (window.height / 3) / 6 }}>
                        <Button
                            buttonStyle={this.state.signupPressed ? styles.signupButtonPressed : styles.signupButton}
                            textStyle={styles.signupButtonText}
                            buttonText={"Sign Up with email"}
                            clickHandler={this._signupButtonClickHandler}
                            buttonShowUnderlay={this._onShowUnderlaySignup}
                            buttonHideUnderlay={this._onHideUnderlaySignup} />
                    </View>
                </View>
                <ForgotPasswordModal {...this.props} />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
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
    row: {
        flexDirection: "row",
        alignItems: "center"
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
    usernameInput: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        paddingLeft: 20,
        width: (window.width / 1.2),
        height: 40,
        color: "white"
    },
    passwordInput: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 20,
        width: (window.width / 1.2),
        height: 40,
        color: "white"
    },
    checkboxLabel: {
        color: "white",
        paddingTop: 3,
        fontSize: 14
    },
    checkBoxStyle: {
        borderColor: "white",
        borderWidth: 1,
        height: 20,
        width: 20,
        borderRadius: 4
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
        width: (window.width / 1.2),
        alignItems: "center",
        height: 40,
        justifyContent: "center"
    },
    loginButton: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#FFA103",
        borderColor: "transparent",
        width: (window.width / 1.2),
        alignItems: "center",
        height: 40,
        justifyContent: "center"
    },
    loginButtonText: {
        color: "white"
    },
    connectLabel: {
        color: "white"
    },
    twitterIcon: {
        marginLeft: 20
    },
    facebookIcon: {

    },
    signupButtonPressed: {
        borderColor: "transparent",
        borderRadius: 40,
        backgroundColor: "#FFA103",
        width: (window.width / 1.2),
        alignItems: "center",
        height: 40,
        justifyContent: "center"
    },
    signupButton: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 40,
        width: (window.width / 1.2),
        alignItems: "center",
        height: 40,
        justifyContent: "center"
    },
    signupButtonText: {
        color: "white"
    },
    headerContainer: {
        height: (window.height / 4),
        marginTop: (window.height / 4) / 2
    },
    rowHeight: {
        height: (window.height / 3)
    },
    marginTop10: {
        marginTop: 10
    }
})

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthOptionsScreen);