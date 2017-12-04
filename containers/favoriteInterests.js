import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableHighlight, ImageBackground,
    Dimensions
} from 'react-native';
import Button from '../components/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Interest from '../containers/interest';

const window = Dimensions.get("window");

class FavoriteInterestsScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            doneButtonPressed: false,
        }

        this._doneButtonClickHandler = this._doneButtonClickHandler.bind(this);
        this._onShowUnderlay = this._onShowUnderlay.bind(this);
        this._onHideUnderlay = this._onHideUnderlay.bind(this);
        this._skipNowClickHandler = this._skipNowClickHandler.bind(this);
    }

    _skipNowClickHandler(){
        this.props.navigation.navigate("Welcome");
    }

    _doneButtonClickHandler() {
        this.props.navigation.navigate("Welcome");
    }

    _onShowUnderlay() {
        this.setState({ doneButtonPressed: true });
    }

    _onHideUnderlay() {
        this.setState({ doneButtonPressed: false });
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                source={require('../images/interests-bckgrd.jpg')}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Choose favorite interests
                    </Text>
                    <Text style={styles.titleDescription}>
                        {"\n"}
                        Choose one or multiple interests in order to {"\n"}
                        help us serve you with content that you like. {"\n"}
                        You can change this any time.
                    </Text>
                </View>
                <View style={styles.interestsContainer}>
                    <View style={[styles.row]}>
                        <Interest selected={false}
                            text={"Accomodation"} />
                        <Interest style={{ marginLeft: 10 }}
                            selected={false}
                            text={"Architecture"} />
                    </View>
                    <View style={[styles.row, styles.marginTop20]}>
                        <Interest selected={false}
                            text={"Auto & Moto"} />
                        <Interest style={{ marginLeft: 10, marginRight: 10 }}
                            selected={false}
                            text={"Arts"} />
                        <Interest selected={false}
                            text={"Events"} />
                    </View>
                    <View style={[styles.row, styles.marginTop20]}>
                        <Interest selected={false}
                            text={"Education"} />
                        <Interest style={{ marginLeft: 10, marginRight: 10 }}
                            selected={false}
                            text={"Food"} />
                        <Interest selected={false}
                            text={"History"} />
                    </View>
                    <View style={[styles.row, styles.marginTop20]}>
                        <Interest selected={false}
                            text={"Music"} />
                        <Interest style={{ marginLeft: 10, marginRight: 10 }}
                            selected={false}
                            text={"Photo"} />
                        <Interest selected={false}
                            text={"Socials"} />
                    </View>
                    <View style={[styles.row, styles.marginTop20]}>
                        <Interest selected={false}
                            text={"Restaurants"} />
                        <Interest style={{ marginLeft: 10 }}
                            selected={false}
                            text={"Shopping"} />
                    </View>
                    <View style={[styles.row, styles.marginTop20]}>
                        <Interest selected={false}
                            text={"Sport"} />
                        <Interest style={{ marginLeft: 10, marginRight: 10 }}
                            selected={false}
                            text={"Travel"} />
                        <Interest selected={false}
                            text={"Tours"} />
                    </View>
                </View>
                <View style={{alignItems: "center", marginTop: (window.height * 10 / 100)}}>
                    <Button
                        buttonStyle={this.state.doneButtonPressed ? styles.doneButtonPressed : styles.doneButton}
                        textStyle={styles.doneButtonText}
                        buttonText={"Done"}
                        clickHandler={this._doneButtonClickHandler}
                        buttonShowUnderlay={this._onShowUnderlay}
                        buttonHideUnderlay={this._onHideUnderlay} />
                    <TouchableHighlight 
                        onPress={this._skipNowClickHandler}
                        underlayColor="transparent"
                        >
                        <Text style={{ color: "#A5A6AB", marginTop: 20 }}>
                            Skip now and configure this later
                        </Text>
                    </TouchableHighlight>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    titleContainer: {
        marginTop: (window.height * 10 / 100)
    },
    title: {
        color: "white",
        fontSize: 25
    },
    titleDescription: {
        color: "#A5A6AB",
        textAlign: "center"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    marginTop20: {
        marginTop: 10
    },
    interestsContainer: {
        alignItems: "center",
        marginTop: (window.height * 5 / 100)
    },
    doneButton: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "transparent",
        borderColor: "white",
        width: (window.width * 70 / 100),
        alignItems: "center",
        height: 40,
        justifyContent: "center",
    },
    doneButtonPressed: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#FFA103",
        borderColor: "transparent",
        width: (window.width * 70 / 100),
        alignItems: "center",
        height: 40,
        justifyContent: "center",
    },
    doneButtonText: {
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

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteInterestsScreen);