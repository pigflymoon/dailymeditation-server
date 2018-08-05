import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import  * as routes from '../constants/routes';
import {
    MainWrapper,
    Sidebar,
    SidebarTitle,
    SideNav,
    SideNavLi,
    NavLink,
    StyledLink,
    SideNavActiveLi,
    MainContent,
    LinkButton,
    Title,
    Icon
} from '../styles/Global';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

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
        <SideNav>
            <SideNavLi>
                <FontAwesomeIcon
                    icon={['fas', 'bars']}
                    fixedWidth={false}
                    size="1x"
                />
                <StyledLink to={routes.OVERVIEW}>Overview</StyledLink>
            </SideNavLi>
            <SideNavLi>
                <FontAwesomeIcon
                    icon={['fas', 'user']}
                    fixedWidth={false}
                    size="1x"
                />
                <StyledLink to={routes.ACCOUNT}>Account</StyledLink>
            </SideNavLi>
            <SideNavLi><NavLink><SignOutButton email={userAndRole.email} role={userAndRole.role}/></NavLink></SideNavLi>

        </SideNav>

    )
}

const NavigationNotAuth = () => {
    return (
        <SideNav>
            <StyledLink to={routes.SIGN_IN}><FontAwesomeIcon
                icon={['fas', 'bars']}
                fixedWidth={false}
                size="1x"
            />SIGN IN</StyledLink>
        </SideNav>
    )
}

export default Navigation