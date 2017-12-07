import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableHighlight, Dimensions, Keyboard
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from '../components/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const window = Dimensions.get("window");

class ForgotPasswordModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resetPasswordButtonPressed: false
        }

        this._closeForgotPasswordModal = this._closeForgotPasswordModal.bind(this);
        this._resetPasswordButtonClickHandler = this._resetPasswordButtonClickHandler.bind(this);
        this.__onShowUnderlayResetPassword = this.__onShowUnderlayResetPassword.bind(this);
        this._onHideUnderlayResetPassword = this._onHideUnderlayResetPassword.bind(this);
        this._triggerModalClose = this._triggerModalClose.bind(this);
    }

    _triggerModalClose() {
        this.refs.modal.close();
    }

    _closeForgotPasswordModal() {
        if(this.props.forgotPasswordModal.isVisible)
            this.props.closeForgotPasswordModal();
    }

    _resetPasswordButtonClickHandler() {
        // Just for testing purposes
        Keyboard.dismiss();
        this.props.closeForgotPasswordModal();
        this.props.navigation.navigate("ResetPassword");
    }

    __onShowUnderlayResetPassword() {
        this.setState({ resetPasswordButtonPressed: true });
    }

    _onHideUnderlayResetPassword() {
        this.setState({ resetPasswordButtonPressed: false });
    }

    render() {
        return (
            <Modal
                ref="modal"
                isOpen={this.props.forgotPasswordModal.isVisible}
                position={"top"}
                style={styles.modal}
                backdropPressToClose={false}
                swipeToClose={false}
                backButtonClose={true}
                onClosed={this._closeForgotPasswordModal} >
                <View style={styles.modalContent}>
                    <View style={[styles.row, styles.closeLinkContainer]}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight
                                onPress={this._triggerModalClose}
                                underlayColor="transparent">
                                <Text style={styles.modalCloseLink}>X</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.alignCenter, styles.modalTitle]}>
                            Forgot password
                        </Text>
                        <Text style={styles.titleDescription}>
                            Please enter your email address. If you don't remember {"\n"}
                            it, contact our
                            <Text style={{ fontWeight: "bold" }}> Support.</Text>
                        </Text>
                    </View>
                    <View style={styles.submitContainer}>
                        <TextInput style={[styles.emailInput]}
                            placeholder="Email"
                            underlineColorAndroid="transparent"
                            autoFocus={true}
                            keyboardType="email-address"
                            onSubmitEditing={this._resetPasswordButtonClickHandler} />
                        <Button
                            buttonStyle={this.state.resetPasswordButtonPressed ? styles.resetPasswordButtonPressed : styles.resetPasswordButton}
                            textStyle={styles.resetPasswordButtonText}
                            buttonText={"Send me the reset password link"}
                            clickHandler={this._resetPasswordButtonClickHandler}
                            buttonShowUnderlay={this.__onShowUnderlayResetPassword}
                            buttonHideUnderlay={this._onHideUnderlayResetPassword} />
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: "center",
        alignItems: "center",
        width: (window.width * 90) / 100,
        height: (window.height * 55) / 100,
        borderRadius: 5,
        backgroundColor: "#F5F5F5"
    },
    modalContent: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    modalCloseLink: {
        textAlign: "right",
        marginRight: 20,
        fontWeight: "bold",
        color: "black",
        fontSize: 30
    },
    alignCenter: {
        alignItems: "center"
    },
    modalTitle: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
    },
    resetPasswordButtonPressed: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#ce8100",
        borderColor: "transparent",
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        marginTop: 20
    },
    resetPasswordButton: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#FFA103",
        borderColor: "transparent",
        width: (window.width * 80 / 100),
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        marginTop: 20
    },
    resetPasswordButtonText: {
        color: "white"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    emailInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#D0D0D0",
        height: 50,
        paddingLeft: 20
    },
    closeLinkContainer: {
        flex: 1,
        justifyContent: "flex-start"
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    titleDescription: {
        textAlign: "center",
        paddingTop: 20
    },
    submitContainer: {
        flex: 2,
        justifyContent: "center"
    }
})


function mapStateToProps(state) {
    return {
        forgotPasswordModal: state.forgotPasswordModal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordModal);