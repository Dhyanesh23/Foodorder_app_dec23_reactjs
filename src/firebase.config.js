import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCwwj2UKcGWKIpAbg2lhjsghd3Lh-tItow",
    authDomain: "restaurantapp-c0da7.firebaseapp.com",
    databaseURL: "https://restaurantapp-c0da7-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-c0da7",
    storageBucket: "restaurantapp-c0da7.appspot.com",
    messagingSenderId: "126604771914",
    appId: "1:126604771914:web:fb2ce3494bb6349f805cb3"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore,storage};