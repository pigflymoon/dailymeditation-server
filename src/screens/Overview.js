import React, {Component} from 'react';

import {overviewStyle} from '../styles/overview';

import {Title, Icon}from '../styles/Global';
import withAuthorization from '../components/withAuthorization';
import withRoot from '../components/withRoot';

import classNames from 'classnames';

//FontAwesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
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
            <div>
                <FontAwesomeIcon
                    icon={['fas', 'cog']}
                    fixedWidth={false}
                    size="2x"
                />

                <Title>Test</Title>
            </div>
        );


    }
}


const authCondition = (authUser) => !!authUser;


Overview = withRoot(Overview);
export default withAuthorization(authCondition)(Overview);
