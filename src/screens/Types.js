import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Title,
}from '../styles/Global';

import withAuthorization from '../components/withAuthorization';

class Types extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Title>Types</Title>
            </div>
        );


    }
}
Types.contextTypes = {
    authUser: PropTypes.object,
};
const authConditon = (authUser) => !!authUser;

export default withAuthorization(authConditon)(Types);