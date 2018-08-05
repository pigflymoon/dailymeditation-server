import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Title,
}from '../styles/Global';

import withAuthorization from '../components/withAuthorization';

class Audio extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Title>Audio</Title>
            </div>
        );


    }
}
Audio.contextTypes = {
    authUser: PropTypes.object,
};
const authConditon = (authUser) => !!authUser;

export default withAuthorization(authConditon)(Audio);