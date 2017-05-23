import React, {Component} from 'react';
import Login from "./layouts/login/login";
import {ApiUtils} from "./api/api-utils";
import Start from "./layouts/start/start";

export default class ClartyReactNative extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false};

        ApiUtils.getToken().then((token) => {
            if(token) {
                // TODO authenticate
                // this.setState({loggedIn: true});
            }
        });
    }

    setLoggedIn() {
        this.setState({loggedIn: true});
    }

    render() {
        if(this.state.loggedIn) {
            return (
                <Start/>
            )
        } else {
            return (
                <Login setLoggedIn={this.setLoggedIn.bind(this)}/>
            )
        }
    }
}