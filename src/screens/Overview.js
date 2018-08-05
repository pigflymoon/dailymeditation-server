import React, {Component} from 'react';

import {overviewStyle} from '../styles/overview';

import {
    Title,

}from '../styles/Global';
import withAuthorization from '../components/withAuthorization';
import withRoot from '../components/withRoot';

import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



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
           <div>
               <Title>Overview</Title>
           </div>
        );


    }
}


const authCondition = (authUser) => !!authUser;


Overview = withRoot(Overview);
export default withAuthorization(authCondition)(Overview);
