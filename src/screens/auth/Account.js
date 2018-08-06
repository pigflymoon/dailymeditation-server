import React from 'react';
import PropTypes from 'prop-types';


import withAuthorization from '../../components/withAuthorization';

const AccountPage = (props, {authUser}) =>
    <div>
        <h1>Account: {authUser.email}</h1>
    </div>

AccountPage.contextTypes = {
    authUser: PropTypes.object,
};
const authConditon = (authUser) => !!authUser;

export default withAuthorization(authConditon)(AccountPage);