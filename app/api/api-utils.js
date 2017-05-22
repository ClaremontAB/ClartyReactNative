import ReactNative from 'react-native';

const { AsyncStorage } = ReactNative;

const ApiUtils = {
    checkStatus: function(response) {
        if (response.status == 200) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    },

    async _onValueChange(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    },
};

const TOKEN_KEY = "authentication";

export { ApiUtils, TOKEN_KEY };