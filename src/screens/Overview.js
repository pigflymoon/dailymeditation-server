import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BurgerMenu from 'react-burger-menu'


import {overviewStyle} from '../styles/overview';


import withAuthorization from '../components/withAuthorization';
import withRoot from '../components/withRoot';

import classNames from 'classnames';

class Overview extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentMenu: 'slide',
            side: 'left'
        };
    }


    render() {
        const {classes} = this.props;
        return (
           <div className={classes.wrapper}>
               <div className={classes.sidebar}>
                   <div class='title'>
                       Sidebar
                   </div>
                   <ul className={classes.nav}>
                       <li>
                           <a>Dashboard</a>
                       </li>
                       <li>
                           <a>Statistics</a>
                       </li>
                       <li>
                           <a className={classes.active}>Milestones</a>
                       </li>
                       <li>
                           <a>Experiments</a>
                       </li>
                       <li>
                           <a>Previews</a>
                       </li>
                       <li>
                           <a>Assets</a>
                       </li>
                       <li>
                           <a>Settings</a>
                       </li>
                       <li>
                           <a>Logout</a>
                       </li>
                   </ul>
               </div>
               <div className={classes.content}>
                   <h1>Flexbox off canvas menu</h1>
               </div>

           </div>
        );


    }
}


const authCondition = (authUser) => !!authUser;


Overview = withRoot(withStyles(overviewStyle)(Overview));
export default withAuthorization(authCondition)(Overview);
