import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ImageBackground, TextInput, TouchableHighlight
    , KeyboardAvoidingView, Image
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Button from '../components/button';

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

    }

    _loginButtonClickHandler() {

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
                <View style={styles.row}>
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
                <TextInput style={styles.usernameInput} placeholder="Username"
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent" />
                <TextInput style={styles.passwordInput} placeholder="Password"
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    secureTextEntry={true} />
                <View style={styles.row}>
                    <CheckBox checkboxStyle={styles.checkBoxStyle}
                        labelStyle={styles.checkboxLabel}
                        label="Remember me"
                        checked={this.state.rememberMe}
                        checkedImage={require('../images/checkmark.png')}
                        onChange={this._rememberMeClickHandler} />
                    <TouchableHighlight style={styles.forgotPwdLinkContainer}
                        onPress={this._forgotPasswordClickHandler}
                        underlayColor="transparent" >
                        <Text style={styles.forgotPwdLink}>
                            Forgot password?
                        </Text>
                    </TouchableHighlight>
                </View>
                <Button
                    buttonStyle={this.state.loginPressed ? styles.loginButtonPressed : styles.loginButton}
                    textStyle={styles.loginButtonText}
                    buttonText={"Login"}
                    clickHandler={this._loginButtonClickHandler}
                    buttonShowUnderlay={this._onShowUnderlay}
                    buttonHideUnderlay={this._onHideUnderlay} />
                <Text style={styles.connectLabel}>
                    or connect with
                </Text>
                <View style={styles.row}>
                    <TouchableHighlight style={styles.facebookIcon}
                        onPress={this._facebookIconClickHandler}>
                        <Image source={require('../images/facebook.png')} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.twitterIcon}
                        onPress={this._twitterIconClickHandler}>
                        <Image source={require('../images/twitter.png')} />
                    </TouchableHighlight>
                </View>
                <Button
                    buttonStyle={this.state.signupPressed ? styles.signupButtonPressed : styles.signupButton}
                    textStyle={styles.signupButtonText}
                    buttonText={"Sign Up with email"}
                    clickHandler={this._signupButtonClickHandler}
                    buttonShowUnderlay={this._onShowUnderlaySignup}
                    buttonHideUnderlay={this._onHideUnderlaySignup} />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    alignColumnContent: {
        alignItems: "center",
        justifyContent: "center",
    },
    alignRowContent: {
        alignItems: "center"
    },
    column1: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    column2: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center"
    },
    column3: {
        flex: 3,
        flexDirection: "column",
        alignItems: "center"
    },
    container: {
        flex: 1,
        flexDirection: "column",
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
    row: {
        flexDirection: "row",
        flex: 1,
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
        paddingLeft: 10,
        paddingTop: 10
    },
    usernameInput: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        paddingLeft: 20,
        width: 300,
        height: 50
    },
    passwordInput: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 20,
        width: 300,
        height: 50
    },
    checkboxLabel: {
        color: "white",
        paddingTop: 3
    },
    checkBoxStyle: {
        borderColor: "white",
        borderWidth: 1
    },
    forgotPwdLink: {
        color: "white",
        paddingLeft: 40
    },
    loginButtonPressed: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "transparent",
        borderColor: "white"
    },
    loginButton: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#FFA103",
        borderColor: "transparent"
    },
    loginButtonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 130,
        paddingLeft: 130,
        color: "white"
    },
    connectLabel: {
        color: "white",
        paddingTop: 30
    },
    twitterIcon: {
        marginLeft: 20
    },
    facebookIcon: {

    },
    signupButtonPressed: {
        borderColor: "transparent",
        borderRadius: 40,
        backgroundColor: "#FFA103"
    },
    signupButton: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 40
    },
    signupButtonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 80,
        paddingLeft: 80,
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthOptionsScreen);