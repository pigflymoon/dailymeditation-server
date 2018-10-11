import {db} from './firebase';
// import {db} from './firebaseAdmin';

//User API

export const doCreateUser = (id, username, email) => {
    return (

        db.ref(`users/${id}`).set({
            username,
            email,
            role: {free_user: true, paid_user: false, admin: false}
        }, function (error) {
            if (error) {
                // The write failed...
                console.log('create user error')
            } else {
                console.log('create user successfully!!')
                updateUserCount();
            }
        })
    )
}
export const updateUserCount = () => db.ref('/user-count').once('value').then(function (snapshot) {
    console.log("There are " + snapshot.numChildren() + " users");
    return snapshot.numChildren() + 1;


}).then(function (number) {
    db.ref('/user-count').set({number})
})

export const getAudioRefByTCategoryAndType = (category, audioType) => {
    console.log('db audioType is ', audioType)
    return db.ref().child(`${category}/${audioType}`);
}

export const getUpdatedAudioRefByTCategoryAndType = (category) => {
    console.log('db category is ', category)
    if (category !== 'beginner') {
        category = 'AllTypes'
    }
    console.log('db category is ****', category)
    return db.ref().child(`updated${category}`);
}

export const getImageRefByTCategoryAndType = (category, imageType) => {
    console.log('db imageType is ', imageType)
    return db.ref().child(`${category}/${imageType}`);
}


export const onceGetUsers = () =>
    db.ref('users').once('value');

