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
import SignIn from '../screens/SignIn';
import Account from '../screens/Account';
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
} from '@fortawesome/free-solid-svg-icons'
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
                        <Route exact path={routes.SIGN_IN} component={() => <SignIn/>}/>
                        <Route exact path={routes.ACCOUNT} component={() => <Account />}/>

                    </MainContent>


                </MainWrapper>


            </Router>
        )
    }


}

export default withAuthentication(App);
