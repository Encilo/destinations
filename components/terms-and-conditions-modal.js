import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, ScrollView } from 'react-native';
import Modal from 'react-native-modalbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const window = Dimensions.get("window");

class TermsAndConditionsModal extends Component {

    constructor(props) {
        super(props);

        this._closeTermsAndConditionsModal = this._closeTermsAndConditionsModal.bind(this);
        this._triggerModalClose = this._triggerModalClose.bind(this);
    }

    _triggerModalClose() {
        this.refs.modal.close();
    }

    _closeTermsAndConditionsModal() { 
        this.props.navigation.navigate("FavoriteInterests");
        this.props.closeSignupModal(); 
        if(this.props.termsAndConditionsModal.isVisible)
            this.props.closeTermsAndConditionsModal();   
    }

    render() {
        return (
            <Modal
                ref="modal"
                isOpen={this.props.termsAndConditionsModal.isVisible}
                position={"center"}
                style={styles.modal}
                backdropPressToClose={false}
                swipeToClose={false}
                backButtonClose={true}
                onClosed={this._closeTermsAndConditionsModal} >
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
                    <View style={[styles.alignCenter, styles.titleContainer]}>
                        <Text style={[styles.alignCenter, styles.modalTitle]}>
                            Terms and conditions
                        </Text>
                    </View>
                    <View style={styles.textParentContainer}>
                        <ScrollView>
                            <Text style={styles.textContainer}>
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in
                                some form, by injected humour, or randomised words which
                                don't look even slightly believable. If you are going to
                                use a passage of Lorem Ipsum, you need to be sure there
                                isn't anything embarrassing hidden in the middle of text.
                                All the Lorem Ipsum generators on the Internet tend to
                                repeat predefined chunks as necessary, making this the
                                first true generator on the Internet. It uses a dictionary
                                of over 200 Latin words, combined with a handful of model
                                sentence structures, to generate Lorem Ipsum which looks
                                reasonable. The generated Lorem Ipsum is therefore always
                                free from repetition, injected humour, or non-characteristic
                                words etc.
                            </Text>
                            <Text style={styles.textContainer}>
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in
                                some form, by injected humour, or randomised words which
                                don't look even slightly believable. If you are going to
                                use a passage of Lorem Ipsum, you need to be sure there
                                isn't anything embarrassing hidden in the middle of text.
                                All the Lorem Ipsum generators on the Internet tend to
                                repeat predefined chunks as necessary, making this the
                                first true generator on the Internet. It uses a dictionary
                                of over 200 Latin words, combined with a handful of model
                                sentence structures, to generate Lorem Ipsum which looks
                                reasonable. The generated Lorem Ipsum is therefore always
                                free from repetition, injected humour, or non-characteristic
                                words etc.
                            </Text>
                            <Text style={styles.textContainer}>
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in
                                some form, by injected humour, or randomised words which
                                don't look even slightly believable. If you are going to
                                use a passage of Lorem Ipsum, you need to be sure there
                                isn't anything embarrassing hidden in the middle of text.
                                All the Lorem Ipsum generators on the Internet tend to
                                repeat predefined chunks as necessary, making this the
                                first true generator on the Internet. It uses a dictionary
                                of over 200 Latin words, combined with a handful of model
                                sentence structures, to generate Lorem Ipsum which looks
                                reasonable. The generated Lorem Ipsum is therefore always
                                free from repetition, injected humour, or non-characteristic
                                words etc.
                            </Text>
                        </ScrollView>
                    </View>
                </View>
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
    modalTitle: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
    },
    textContainer: {
        textAlign: "center",
        padding: 20
    },
    closeLinkContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "flex-start"
    },
    titleContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "flex-start"
    },
    textParentContainer: {
        flex: 8, 
        alignItems: "center", 
        justifyContent: "center"
    }
})

function mapStateToProps(state) {
    return {
        termsAndConditionsModal: state.termsAndConditionsModal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditionsModal);