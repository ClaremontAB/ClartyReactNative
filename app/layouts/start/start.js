import * as React from "react";
import {ScrollView, Text, StyleSheet} from "react-native";

export default class Start extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.welcome}>
                    Välkommen in i värmen!
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flexDirection: 'column',
        backgroundColor: '#9edcf7'
    },
    welcome: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30,
    }
});