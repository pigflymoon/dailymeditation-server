import {db} from './firebase';

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


                // db.ref('/user-count').once('value').then(function(snapshot) {
                //     console.log('snapshot is ',snapshot.val())
                //     });


                // Data saved successfully!
                // var user = db.ref().child('user-count');

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


export const onceGetUsers = () =>
    db.ref('users').once('value');

