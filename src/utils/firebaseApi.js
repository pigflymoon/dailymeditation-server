import React, {Component} from 'react';

import {storage} from '../firebase/firebase';
import mimes from './fileTypes';

export const saveAudio = (file, filename, ref) => {
    if (!ref) ref = storage.ref();
    console.log('file type is', file)
    if (mimes[file.type].extensions[0]) {
        console.log('file type is', file.type)
        // Create the file metadata
        var metadata = {
            contentType: file.type
        };

        // Upload file and metadata to the object
        var uploadTask = ref.child(filename).put(file, metadata);

        return uploadTask;
    }
}

