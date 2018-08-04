import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from '../components/Navigation';
import Overview from '../screens/Overview';
import SignIn from '../screens/SignIn';
import Account from '../screens/Account';

import withAuthentication from '../components/withAuthentication';
import * as routes from '../constants/routes';

// import DefaultTheme from '../styles/theme/DefaultTheme';
// const {color, font} = DefaultTheme;


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
                <div>
                    <h1>Welcome to React</h1>
                    <Navigation/>

                    <Route exact path={routes.OVERVIEW} component={() => <Overview />}/>
                    <Route exact path={routes.SIGN_IN} component={() => <SignIn/>}/>
                    <Route exact path={routes.ACCOUNT} component={() => <Account />}/>

                </div>
            </Router>
        )
    }


}

export default withAuthentication(App);
