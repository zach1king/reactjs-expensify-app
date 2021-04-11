import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid,
});

export const startLogin = () => {
    return () => {
        // Pop up a google login window, a promise
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};