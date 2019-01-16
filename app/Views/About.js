import React from "react";
import { View, ScrollView, Text, Linking, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const About = () => (
    <ScrollView contentContainerStyle={styles.view}>
        <Text style={styles.h1}>About</Text>
    </ScrollView>
);

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        padding: 20
    },
    h1: {
        fontSize: 22,
        alignSelf: "center",
        marginBottom: 20
    }
});

export default About;
