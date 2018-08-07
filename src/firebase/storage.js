import {storage} from './firebase';

//User API

export const getAudioByBeginner = (category)=>{
    console.log('category',category)
    return storage.ref().child(`${category}`)
}
export const getAudioByCategoryAndType = (category,audioType)=>{
    console.log('audioType',audioType,'category',category)
    return storage.ref().child(`${category}/${audioType}`)
}

