import {storage} from './firebase';
// import {storage} from './firebaseAdmin';

//User API

export const getAudioByBeginner = (category)=>{
    console.log('category',category)
    return storage.ref().child(`${category}`)
}
export const getAudioByCategoryAndType = (category,audioType)=>{
    console.log('audioType',audioType,'category',category)
    return storage.ref().child(`${category}/${audioType}`)
}

export const getImageByCategoryAndType = (category,imageType)=>{
    console.log('storage audioType',imageType,'category',category)
    return storage.ref().child(`${category}/${imageType}`)
}


