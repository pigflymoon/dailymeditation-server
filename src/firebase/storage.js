import {storage} from './firebase';

//User API

export const getPaidImages = () =>
    storage.ref().child('paidImages');

export const getDefaultImages = () =>
    storage.ref().child('freeImages');
