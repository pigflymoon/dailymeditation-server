import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    RightWrapper,
    uploadStyles,
}from '../../styles/uploadPage';

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

import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import MoodIcon from '@material-ui/icons/Mood';

import Typography from '@material-ui/core/Typography';

import UploadPanel from '../../components/UploadPanel';
import withRoot from '../../components/withRoot';
import withAuthorization from '../../components/withAuthorization';

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

class MeditationCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            audioCategory: 'meditationCategory',
            imageCategory: 'meditationCategoryImage',
            activeTab: 'anxiety',

        };
    }

    handleChange = (event, value) => {
        let tabs = ["anxiety", "lettingGo", "healing"];
        for (let tab of tabs) {
            let tabValue = tabs[value];
            if (tab == tabValue) {
                this.setState({activeTabIndex: value, activeTab: tab});

            }
        }
    };

    handleUploadStatus = (status) => {
        this.setState({open: status.open, uploading: status.uploading, error: status.error});
    }


    render() {
        const {classes} = this.props;
        const {activeTabIndex} = this.state;
        return (
            <RightWrapper>
                <Paper>
                    <div className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={activeTabIndex}
                                onChange={this.handleChange}
                                scrollable
                                scrollButtons="on"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Anxiety" icon={<SentimentDissatisfiedIcon />}/>
                                <Tab label="Letting Go" icon={<FilterDramaIcon />}/>
                                <Tab label="Healing" icon={<WbSunnyIcon />}/>
                            </Tabs>
                        </AppBar>
                        <TabContainer>
                            <UploadPanel classes={classes}
                                         imageCategory={this.state.imageCategory}
                                         audioCategory={this.state.audioCategory}
                                         activeTabIndex={activeTabIndex} activeTab={this.state.activeTab}
                                         onHandleUploadStatus={this.handleUploadStatus}
                            />
                        </TabContainer>

                    </div>

                </Paper>

            </RightWrapper>
        );


    }
}
MeditationCategory.contextTypes = {
    authUser: PropTypes.object,
};
const authConditon = (authUser) => !!authUser;
MeditationCategory = withRoot(withStyles(uploadStyles)(MeditationCategory));

export default withAuthorization(authConditon)(MeditationCategory);