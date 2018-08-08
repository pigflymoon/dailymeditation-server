import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
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
} from '../styles/Global';
import withAuthentication from '../components/withAuthentication';
import * as routes from '../constants/routes';
import Navigation from '../components/Navigation';
import Overview from '../screens/Overview';
import Beginner from '../screens/upload/Beginner';
import MeditationCategory from '../screens/upload/MeditationCategory';

import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import Account from '../screens/auth/Account';
//FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faBars,
    faUser,
    faFileAudio,

} from '@fortawesome/free-solid-svg-icons'
library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faBars,
    faUser,
    faFileAudio,
)


class App extends Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {
        const {
            styles
        }= this.props
        return (

            <Router>

                <MainWrapper>
                    <Sidebar>
                        <SidebarTitle>
                            Overview
                        </SidebarTitle>
                        <Navigation/>
                    </Sidebar>
                    <MainContent isOpen>
                        <LinkButton><FontAwesomeIcon
                            icon={['fas', 'bars']}
                            fixedWidth={false}
                            size="2x"
                        /></LinkButton>
                        <Route exact path={routes.OVERVIEW} component={() => <Overview />}/>
                        <Route exact path={routes.BEGINNER} component={() => <Beginner />}/>
                        <Route exact path={routes.MEDITATIONCATEGORY} component={() => <MeditationCategory />}/>

                        <Route exact path={routes.SIGN_IN} component={() => <SignIn/>}/>
                        <Route exact path={routes.SIGN_UP} component={() => <SignUp/>}/>
                        <Route exact path={routes.ACCOUNT} component={() => <Account />}/>

                    </MainContent>


                </MainWrapper>


            </Router>
        )
    }


}

export default withAuthentication(App);
