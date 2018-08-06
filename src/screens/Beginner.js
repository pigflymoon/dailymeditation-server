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
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';

import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';

import UploadPanel from '../components/UploadPanel';
import withRoot from '../components/withRoot';


import withAuthorization from '../components/withAuthorization';
function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class Beginner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        return (
            <RightWrapper>
                <Paper>
                    <div className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                scrollable
                                scrollButtons="on"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Being Present" icon={<PhoneIcon />}/>
                                <Tab label="How to Breathe" icon={<FavoriteIcon />}/>
                                <Tab label="Body Scan" icon={<PersonPinIcon />}/>
                                <Tab label="Observe your Thoughts" icon={<HelpIcon />}/>
                                <Tab label="Make Space for your emotions" icon={<ShoppingBasket />}/>
                                <Tab label="Set Reasonable Goals" icon={<ThumbDown />}/>
                                <Tab label="Bring Meditation into Your Every Day Life" icon={<ThumbUp />}/>
                            </Tabs>
                        </AppBar>
                        {value === 0 && <TabContainer>
                            <UploadPanel classes={classes} imageCategory={this.state.imageCategory}
                                         activeTabIndex={this.state.activeTabIndex} activeTab={this.state.activeTab}
                                         onHandleUploadStatus={this.handleUploadStatus}
                            />
                        </TabContainer>}
                        {value === 1 && <TabContainer>Item Two</TabContainer>}
                        {value === 2 && <TabContainer>Item Three</TabContainer>}
                        {value === 3 && <TabContainer>Item Four</TabContainer>}
                        {value === 4 && <TabContainer>Item Five</TabContainer>}
                        {value === 5 && <TabContainer>Item Six</TabContainer>}
                        {value === 6 && <TabContainer>Item Seven</TabContainer>}
                    </div>

                </Paper>

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