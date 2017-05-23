import settings from "../config/settings";
import {ApiUtils, TOKEN_KEY} from "./api-utils";

import ReactNative from 'react-native';

const {
    Alert
} = ReactNative;

function login(username, password) {
    return fetch(settings.apiUrl + '/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    })
        .then((response) => ApiUtils.checkStatus(response))
        .then((response) => {
            let auth = response.headers.get('Authorization');
            let token = auth.substring(auth.indexOf(" ") + 1);
            ApiUtils._onValueChange(TOKEN_KEY, token);
            return Promise.resolve(response);
        })
        .catch(e => {
            Alert.alert("Inloggning misslyckades", "Kontrollera e-post och lösenord");
            return Promise.reject(new Error('Login failed'));
        });
}

export { login }
