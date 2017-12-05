import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Dimensions } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
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
        );
    }
}

const styles = StyleSheet.create({
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
    }
})