import * as React from "react";
import {Image, ScrollView, Text, TextInput, View, StyleSheet} from "react-native";
import Container from "../../components/container";
import Button from "../../components/button";
import images from "../../config/images";
import {login} from "../../api/api";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    _login() {
        login(this.state.email, this.state.password).then(() => {
            this.props.setLoggedIn();
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image source={images.logo} style={styles.logo}/>
                <Text style={styles.welcome}>
                    Välkommen till Clarty!
                </Text>
                <Container>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Epost"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={(email) => this.setState({email})}
                    />
                </Container>
                <Container>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder="Lösenord"
                        onChangeText={(password) => this.setState({password})}
                    />
                </Container>

                <View style={styles.footer}>
                    <Container>
                        <Button
                            title="Go!"
                            label="Go!"
                            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                            onPress={this._login.bind(this)}
                        />
                    </Container>
                </View>
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
    },
    logo: {
        alignSelf: 'center',
        margin: 30,
        marginTop: 40
    },
    textInput: {
        padding: 10,
        height: 60,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    primaryButton: {
        backgroundColor: '#69AAD4'
    },
    footer: {
        marginTop: 100
    }
});