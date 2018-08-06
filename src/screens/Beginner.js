import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    RightWrapper,
    uploadStyles,
}from '../styles/uploadPage';

import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import UploadPanel from '../components/UploadPanel';
import withRoot from '../components/withRoot';


import withAuthorization from '../components/withAuthorization';

class Beginner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
        };
    }


    render() {
        const {classes} = this.props;
        return (
            <RightWrapper>
                <Paper>
                    <Tabs
                        value={this.state.activeTabIndex}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                    >
                        <Tab label="Christmas"/>
                        <Tab label="New Year"/>
                        <Tab label="Easter"/>
                    </Tabs>

                </Paper>
                <UploadPanel classes={classes}  imageCategory={this.state.imageCategory}
                             activeTabIndex={this.state.activeTabIndex} activeTab={this.state.activeTab}

                             onHandleUploadStatus={this.handleUploadStatus}
                />
            </RightWrapper>
        );


    }
}
Beginner.contextTypes = {
    authUser: PropTypes.object,
};
const authConditon = (authUser) => !!authUser;
Beginner = withRoot(withStyles(uploadStyles)(Beginner));

export default withAuthorization(authConditon)(Beginner);