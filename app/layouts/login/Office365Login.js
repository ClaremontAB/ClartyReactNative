import * as React from "react";
import {ReactNativeAD, ADLoginView} from "react-native-azure-ad";
import {View, StyleSheet} from "react-native";

export const CLIENT_ID = "f4d22284-40ab-4d51-847d-f5bfb55b1446";
export const RESOURCE_ID = "https://outlook.office.com";

export const config = {
    client_id: CLIENT_ID,
    resources: [
        RESOURCE_ID
    ]
};

export default class Office365Login extends React.Component {

    constructor(props) {
        super(props);
    }

    onVisibilityChange = () => {
        this.props.onHide && this.props.onHide();
    };

    render() {
        return (
            <View style={styles.container}>
                <ADLoginView context={ReactNativeAD.getContext(CLIENT_ID)}
                             hideAfterLogin={true}
                             onVisibilityChange={this.onVisibilityChange}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});