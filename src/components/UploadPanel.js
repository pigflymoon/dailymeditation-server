import React, {Component} from 'react';
import {db, storage} from '../firebase';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

import {saveAudio} from '../utils/firebaseApi';


export default class UploadPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // users: null,
            // file: null,
            // fileName: '',
            uploading: false,
            // imagePreviewUrl: '',
            // imagePreviewUrls: [],
            // showUpload: false,
            open: false,
            activeTabIndex: this.props.activeTabIndex,
            audioCategory: this.props.audioCategory,
            activeTab: this.props.activeTab,
            // mobileOpen: false,
            choseFiles: null,
            uploadStatus: 'Please choose file to upload',
        };

    }

    componentWillReceiveProps(nextProps) {
        if (this.state.activeTab !== nextProps.activeTab) {
            this.setState({
                // imagePreviewUrls: [],
                uploadStatus: 'Please choose file to upload',
            });
        }
        this.setState({
            // imagePreviewUrls: [],
            // uploadStatus: 'Please choose file to upload',
            audioCategory: nextProps.audioCategory,
            activeTab: nextProps.activeTab,
            activeTabIndex: nextProps.activeTabIndex
        });

    }


    handleAddImage = (e, audioType) => {
        e.preventDefault();
        var uploadAudioType = audioType;
        console.log('audioType is for ', uploadAudioType);
        var choseFiles = e.target.files;

        var files = [];// imagePreviewUrls = [];
        for (var file of choseFiles) {
            files.push(file);
            let reader = new FileReader();
            reader.onloadend = () => {
                // imagePreviewUrls.push(reader.result)
                this.setState({
                    file: file,
                });
            }
            reader.readAsDataURL(file)
        }

        this.setState({choseFiles: files});
        e.target.value = '';
    }

    handleUnChoose = data => () => {
        const filesData = [...this.state.choseFiles];
        // const imagesData = [...this.state.imagePreviewUrls];

        const fileToDelete = filesData.indexOf(data);

        filesData.splice(fileToDelete, 1);
        // imagesData.splice(fileToDelete, 1);
        this.setState({choseFiles: filesData});
    }

    handleUpload = (e, category, audioType) => {
        e.preventDefault();
        console.log('choseFiles length', this.state.choseFiles)
        if (!(this.state.choseFiles) || this.state.choseFiles.length < 1) {
            this.setState({uploading: false, choseFiles: []});
            // this.props.onHandleDialog(true);
            this.props.onHandleUploadStatus({open: true, uploading: false, error: 'Please choose file'});

        } else {
            this.setState({uploading: true});
            this.props.onHandleUploadStatus({open: false, uploading: true, error: false});

            this.filesUpload(this.state.choseFiles, category, audioType);
        }
    }

    getDownloadUrl = (uploadAudiosRef, dbUpdatedAudiosRef, snapshot) => {//db,
        console.log('snapshot is ********',snapshot)
        snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);
            if (downloadURL !== null) {
                var downloadUrl = downloadURL;
                var newAudioKey = uploadAudiosRef.push().key;
                console.log('newAudioKey', newAudioKey);

                var saveFilename = snapshot.metadata.name;
                uploadAudiosRef.child(newAudioKey + '_audio').set({
                    downloadUrl: downloadUrl,
                    name: saveFilename
                });
                dbUpdatedAudiosRef.child(newAudioKey + '_audio').set({
                    downloadUrl: downloadUrl,
                    name: saveFilename
                });
            } else {
                this.setState({uploading: false, uploadStatus: 'Download url is not ready!'});
            }
        });

    }

    fileUpload = (file, audiosRef, uploadAudiosRef, dbUpdatedAudiosRef) => {//file,storage,db
        var filename = (file.name).match(/^.*?([^\\/.]*)[^\\/]*$/)[1];

        var task = saveAudio(file, filename, audiosRef)
        var self = this;

        task.then(function (snapshot) {
            console.log('snapshot is ', snapshot)
            self.getDownloadUrl(uploadAudiosRef, dbUpdatedAudiosRef, snapshot);//category-type-db, updated-db

        })
            .then(function () {
                self.setState({
                    uploading: false,
                    uploadStatus: 'Upload is Finished! And save to the database ',
                    choseFiles: []
                });
                self.props.onHandleUploadStatus({open: true, uploading: false, error: false});

            })
            .catch(function (error) {
                console.error('error is', error);
                self.setState({uploading: false, choseFiles: []});
                self.props.onHandleUploadStatus({open: true, uploading: false, error: 'error'});


            });
    }

    filesUpload = (files, category, audioType) => {
        console.log('category is ', category, 'audioType is', audioType)
        var audiosRef = storage.getAudioByCategoryAndType(category, audioType);
        var uploadAudiosRef = db.getAudioRefByTCategoryAndType(category, audioType);
        var dbUpdatedAudiosRef = db.getUpdatedAudioRefByTCategoryAndType(category);

        if (files) {
            for (let file of files) {
                this.fileUpload(file, audiosRef, uploadAudiosRef, dbUpdatedAudiosRef);//every file
            }
        } else {
            console.log('no file')
        }
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
                    accept="audio/*"
                    className={classes.input}
                    id="flat-button-file"
                    multiple
                    type="file"
                    onChange={(e) => this.handleAddImage(e, this.state.activeTab)}
                />
                <label htmlFor="flat-button-file">
                    <Button variant="fab" component="span" color="primary" aria-label="Add" className={classes.button}>
                        <AddIcon />
                    </Button>
                </label>
                <Button onClick={(e) => this.handleUpload(e, this.state.audioCategory, this.state.activeTab)}
                        variant="contained" href="#contained-buttons" className={classes.button}>
                    Upload for {this.state.activeTab}
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

                </div>


                {this.state.uploading ? <CircularProgress className={classes.progress}/>
                    : <Typography>{this.state.uploadStatus}</Typography>}

            </Paper>
        );


    }
}




