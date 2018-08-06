import React, {Component} from 'react';
// import {db, storage} from '../firebase';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

// import {saveImage} from '../utils/firebaseImageApi';


export default class UploadPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // users: null,
            // file: null,
            // fileName: '',
            uploading: false,
            // imagePreviewUrl: '',
            imagePreviewUrls: [],
            // showUpload: false,
            open: false,
            activeTabIndex: this.props.activeTabIndex,
            imageCategory: this.props.imageCategory,
            activeTab: this.props.activeTab,
            // mobileOpen: false,
            choseFiles: null,
            uploadStatus: 'Please choose file to upload',
        };

    }

    componentWillReceiveProps(nextProps) {
        if (this.state.activeTab !== nextProps.activeTab) {
            this.setState({
                imagePreviewUrls: [],
                uploadStatus: 'Please choose file to upload',
            });
        }
        this.setState({
            // imagePreviewUrls: [],
            // uploadStatus: 'Please choose file to upload',
            imageCategory: nextProps.imageCategory,
            activeTab: nextProps.activeTab,
            activeTabIndex: nextProps.activeTabIndex
        });

    }

    render() {
        const {classes} = this.props;
        console.log('props is ', this.props)

        return (
            <Paper className={classes.paperContainer}>
                <div className="content">
                    Content for the tab: {this.state.activeTabIndex}
                    --{this.state.activeTab}
                </div>

                <input
                    accept="image/*"
                    className={classes.input}
                    id="flat-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="flat-button-file">
                    <Button variant="fab" component="span" color="primary" aria-label="Add" className={classes.button}>
                        <AddIcon />
                    </Button>
                </label>
                <Button variant="contained" href="#contained-buttons" className={classes.button}>
                    Upload
                </Button>

                <div className={classes.filesWrapper}>
                    {this.state.choseFiles ? (this.state.choseFiles).map((file, index) => {
                            return (
                                <Chip
                                    label={file.name}
                                    className={classes.file}
                                    key={index}
                                    onDelete={ this.handleUnChoose(file)}

                                />
                            )
                        }) : null}
                </div>

                <div className="imgPreview">

                    {this.state.imagePreviewUrls ? (this.state.imagePreviewUrls).map((image, index) => {
                            return (
                                <div key={index}><img src={image} width={50}/></div>
                            )
                        }) : null}
                </div>


                {this.state.uploading ? <CircularProgress className={classes.progress}/>
                    : <Typography>{this.state.uploadStatus}</Typography>}

            </Paper>
        );


    }
}




