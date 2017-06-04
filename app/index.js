import React, {Component} from 'react';
import Office365Login, {CLIENT_ID, config, RESOURCE_ID} from "./layouts/login/Office365Login";
import Start from "./layouts/start/start";
import {ReactNativeAD} from "react-native-azure-ad";

export default class ClartyReactNative extends Component {

    constructor(props) {
        super(props);
        new ReactNativeAD(config);
        this.state = {loggedIn: false};
        this.checkToken();
    }

    checkToken() {
        let ctx = ReactNativeAD.getContext(CLIENT_ID);
        ctx.assureToken(RESOURCE_ID).then((token) => {
            if (token) {
                this.setState({loggedIn: true});
            }
        })
    }

    onHideOffice365View() {
        this.checkToken();
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <Start/>
            )
        } else {
            return (
                <Office365Login onHide={this.onHideOffice365View.bind(this)}/>
            )
        }
    }
}