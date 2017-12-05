import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableHighlight,
    Dimensions, ScrollView
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from '../components/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import TermsAndConditionsModal from '../components/terms-and-conditions-modal';

const window = Dimensions.get("window");

class SignupModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signupButtonPressed: false
        }

        this._closeSignupModal = this._closeSignupModal.bind(this);
        this._signupButtonClickHandler = this._signupButtonClickHandler.bind(this);
        this._onShowUnderlay = this._onShowUnderlay.bind(this);
        this._onHideUnderlay = this._onHideUnderlay.bind(this);
        this._triggerSignupModalClose = this._triggerSignupModalClose.bind(this);
    }

    _closeSignupModal() {
        this.props.closeSignupModal();
    }

    _signupButtonClickHandler() {
        this.props.openTermsAndConditionsModal();
    }

    _onShowUnderlay() {
        this.setState({ signupButtonPressed: true });
    }

    _onHideUnderlay() {
        this.setState({ signupButtonPressed: false });
    }

    _triggerSignupModalClose() {
        this.refs.modal.close();
    }

    render() {
        return (
            <Modal
                ref="modal"
                isOpen={this.props.signupModal.isVisible}
                position={"center"}
                style={styles.modal}
                backdropPressToClose={false}
                swipeToClose={false}
                backButtonClose={true}
                onClosed={this._closeSignupModal} >
                <View style={styles.modalContent}>
                    <View style={[styles.row, styles.closeLinkContainer]}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight
                                onPress={this._triggerSignupModalClose}
                                underlayColor="transparent">
                                <Text style={styles.modalCloseLink}>X</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={[styles.alignCenter, styles.titleContainer]}>
                        <Text style={[styles.alignCenter, styles.modalTitle]}>
                            Sign Up
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <ScrollView >
                            <TextInput style={[styles.marginTop30, styles.input]}
                                placeholder="Username"
                                underlineColorAndroid="transparent"
                                returnKeyType="next"
                                onSubmitEditing={() => { this.refs.email.focus() }}
                                blurOnSubmit={false}
                            />
                            <TextInput style={[styles.marginTop20, styles.input]}
                                ref="email"
                                placeholder="Email"
                                underlineColorAndroid="transparent"
                                returnKeyType="next"
                                keyboardType="email-address"
                                onSubmitEditing={() => { this.refs.phone.focus() }}
                                blurOnSubmit={false}
                            />
                            <TextInput style={[styles.marginTop20, styles.input]}
                                ref="phone"
                                placeholder="Phone"
                                underlineColorAndroid="transparent"
                                returnKeyType="next"
                                keyboardType="phone-pad"
                                onSubmitEditing={() => { this.refs.pwd.focus() }}
                                blurOnSubmit={false}
                            />
                            <TextInput style={[styles.marginTop20, styles.input]}
                                ref="pwd"
                                placeholder="Password"
                                underlineColorAndroid="transparent"
                                returnKeyType="next"
                                secureTextEntry={true}
                                onSubmitEditing={() => { this.refs.cpwd.focus() }}
                                blurOnSubmit={false}
                            />
                            <TextInput style={[styles.marginTop20, styles.input]}
                                ref="cpwd"
                                placeholder="Confirm password"
                                underlineColorAndroid="transparent"
                                returnKeyType="go"
                                secureTextEntry={true}
                                onSubmitEditing={this._signupButtonClickHandler}
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            buttonStyle={this.state.signupButtonPressed ? styles.signupButtonPressed : styles.signupButton}
                            textStyle={styles.signupButtonText}
                            buttonText={"Sign me up"}
                            clickHandler={this._signupButtonClickHandler}
                            buttonShowUnderlay={this._onShowUnderlay}
                            buttonHideUnderlay={this._onHideUnderlay}
                        />
                    </View>
                    <View style={styles.termsAndServiceContainer}>
                        <Text style={styles.footerNote}>
                            By clicking "Sign me up" you agree to our {"\n"}
                            <Text style={{ fontWeight: "bold" }}>
                                Terms of Service
                            </Text>
                        </Text>
                    </View>
                </View>

                <TermsAndConditionsModal {...this.props} />
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: "center",
        alignItems: "center",
        width: (window.width * 95) / 100,
        height: (window.height * 90) / 100,
        borderRadius: 5,
        backgroundColor: "#F5F5F5"
    },
    modalTitle: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
    },
    modalContent: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    modalCloseLink: {
        textAlign: "right",
        marginRight: 20,
        marginTop: 10,
        fontWeight: "bold",
        color: "black",
        fontSize: 30
    },
    alignCenter: {
        alignItems: "center"
    },
    marginTop20: {
        marginTop: 20
    },
    marginTop30: {
        marginTop: 30
    },
    input: {
        paddingLeft: 20,
        width: (window.width * 80 / 100),
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#D0D0D0",
        height: 50
    },
    signupButton: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#FFA103",
        borderColor: "transparent",
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center",
    },
    signupButtonPressed: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#ce8100",
        borderColor: "transparent",
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center",
    },
    signupButtonText: {
        color: "white"
    },
    footerNote: {
        textAlign: "center",
    },
    closeLinkContainer: {
        flex: 1, 
        justifyContent: "flex-start", 
        alignItems: "center"
    },
    titleContainer: {
        flex: 1, 
        justifyContent: "flex-start", 
        alignItems:"center"
    },
    formContainer: {
        flex: 9, 
        justifyContent: "center", 
        alignItems:"center"
    },
    buttonContainer: {
        flex: 2, 
        justifyContent: "flex-start", 
        alignItems:"center"
    },
    termsAndServiceContainer: {
        flex: 1, 
        justifyContent: "flex-start", 
        alignItems:"center"
    }
})

function mapStateToProps(state) {
    return {
        signupModal: state.signupModal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);