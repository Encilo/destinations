import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ImageBackground, TouchableHighlight
    , KeyboardAvoidingView, Image, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Button from '../components/button';
import SignupModal from '../containers/signup-modal';
import Login from '../containers/login';
import Logo from '../components/logo';
import ForgotPasswordModal from '../containers/forgot-password-modal';
import TermsAndConditionsModal from '../components/terms-and-conditions-modal';

const window = Dimensions.get("window");

class AuthOptionsScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signupPressed: false
        }

        this._onHideUnderlaySignup = this._onHideUnderlaySignup.bind(this);
        this._onShowUnderlaySignup = this._onShowUnderlaySignup.bind(this);
        this._facebookIconClickHandler = this._facebookIconClickHandler.bind(this);
        this._twitterIconClickHandler = this._twitterIconClickHandler.bind(this);
        this._signupButtonClickHandler = this._signupButtonClickHandler.bind(this);
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
        this.props.openSignupModal();
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                source={require('../images/authoptions-bckgrd.jpg')}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>
                    <Login
                        {...this.props}
                        usernameInputStyle={styles.usernameInput}
                        passwordInputStyle={styles.passwordInput}
                    />
                </KeyboardAvoidingView>
                <View style={styles.connectWithContainer}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.connectLabel}>
                            or connect with
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={[styles.row]}>
                            <TouchableHighlight style={styles.facebookIcon}
                                onPress={this._facebookIconClickHandler}>
                                <Image source={require('../images/facebook.png')} />
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.twitterIcon}
                                onPress={this._twitterIconClickHandler}>
                                <Image source={require('../images/twitter.png')} />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={styles.signupContainer}>
                    <Button
                        buttonStyle={this.state.signupPressed ? styles.signupButtonPressed : styles.signupButton}
                        textStyle={styles.signupButtonText}
                        buttonText={"Sign Up with email"}
                        clickHandler={this._signupButtonClickHandler}
                        buttonShowUnderlay={this._onShowUnderlaySignup}
                        buttonHideUnderlay={this._onHideUnderlaySignup} />
                </View>
                <ForgotPasswordModal {...this.props} />
                <SignupModal {...this.props} />
                <TermsAndConditionsModal {...this.props} />
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
    row: {
        flexDirection: "row",
        alignItems: "center"
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
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    signupButton: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 40,
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    signupButtonText: {
        color: "white"
    },
    usernameInput: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        paddingLeft: 20,
        width: (window.width * 80 / 100),
        height: 50,
        color: "white"
    },
    passwordInput: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 20,
        width: (window.width * 80 / 100),
        height: 50,
        color: "white"
    },
    logoContainer: {
        flex: 3, 
        alignItems: "center", 
        justifyContent: "center" 
    },
    loginContainer: {
        flex: 4, 
        alignItems: "center", 
        justifyContent: "flex-start"
    },
    connectWithContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "flex-start"
    },
    signupContainer: {
        flex: 2, 
        alignItems: "center", 
        justifyContent: "center"
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