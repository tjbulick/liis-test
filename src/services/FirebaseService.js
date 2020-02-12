import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default class FirebaseService {
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyBSTRgnDd3k1x5x5NAK7A4jpFoMKTVY_OA",
            authDomain: "liis-test.firebaseapp.com",
            databaseURL: "https://liis-test.firebaseio.com",
            projectId: "liis-test",
            storageBucket: "liis-test.appspot.com",
            messagingSenderId: "739295187595",
            appId: "1:739295187595:web:1f4e9b004bc96c4af7ba8e"
        };
        // firebase.initializeApp(this.firebaseConfig);

        this.usersRef = firebase.database().ref('users/');
    }

    writeUserData = async () => {
        console.log('hello from writeUserData method')
        console.log(this.usersRef)
    }
}