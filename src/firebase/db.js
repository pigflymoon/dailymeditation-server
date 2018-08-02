import {db} from './firebase';

//User API

export const doCreateUser = (id, username, email) =>
    db.ref(`users/${id}`).set({
        username,
        email,
        role: {free_user: true, paid_user: false, admin: false}
    });

export const onceGetUsers = () =>
    db.ref('users').once('value');

