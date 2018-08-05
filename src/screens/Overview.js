import React, {Component} from 'react';

import {overviewStyle} from '../styles/overview';

import {
    MainWrapper,
    Sidebar,
    SidebarTitle,
    SideNav,
    SideNavLi,
    NavLink,
    SideNavActiveLi,
    MainContent,
    LinkButton,
    Title,
    Icon
}from '../styles/Global';
import withAuthorization from '../components/withAuthorization';
import withRoot from '../components/withRoot';

import classNames from 'classnames';

//FontAwesome

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faBars,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faBars
)

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'slide',
            side: 'left'
        };
    }


    render() {
        return (
            <MainWrapper>
                <Sidebar>
                    <SidebarTitle>
                        Overview
                    </SidebarTitle>
                    <SideNav>
                        <SideNavLi><FontAwesomeIcon
                            icon={['fas', 'bars']}
                            fixedWidth={false}
                            size="1x"
                        /><NavLink>Dashboard</NavLink>
                        </SideNavLi>
                        <SideNavLi><NavLink>Dashboard</NavLink></SideNavLi>
                        <SideNavActiveLi><NavLink>Active</NavLink></SideNavActiveLi>
                        <SideNavLi><NavLink>Dashboard</NavLink></SideNavLi>
                    </SideNav>
                </Sidebar>
                <MainContent isOpen>
                    <LinkButton><FontAwesomeIcon
                        icon={['fas', 'bars']}
                        fixedWidth={false}
                        size="2x"
                    /></LinkButton>
                </MainContent>


            </MainWrapper>
        );


    }
}


const authCondition = (authUser) => !!authUser;


Overview = withRoot(Overview);
export default withAuthorization(authCondition)(Overview);
