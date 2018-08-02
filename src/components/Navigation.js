import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import  * as routes from '../constants/routes';

import SignOutButton from './SignOut';

const Navigation = (props, {authUser}) => {
    if (authUser) {
        console.log('navigation is called');
        return (
            <div>
                {authUser.user ?
                    <NavigationAuth role={authUser.role} email={authUser.user.email}/> : <NavigationNotAuth/>}
            </div>
        )
    }
}

Navigation.contextTypes = {
    authUser: PropTypes.object,
};

const NavigationAuth = (userAndRole) => {
    return (
        <ul>
            <li>
                <Link to={routes.OVERVIEW}>Overview</Link>
            </li>
            <li><SignOutButton email={userAndRole.email} role={userAndRole.role}/></li>
        </ul>
    )
}

const NavigationNotAuth = () => {
    return (
        <ul>
            <li>
                <Link to={routes.SIGN_IN}>SIGN IN</Link>
            </li>
        </ul>
    )
}

export default Navigation