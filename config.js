import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDaPmD9r_khk8lKgi5NGLNLE4M6xNqI4pc",
    authDomain: "bartersystemapp-f1644.firebaseapp.com",
    projectId: "bartersystemapp-f1644",
    storageBucket: "bartersystemapp-f1644.appspot.com",
    messagingSenderId: "315218691986",
    appId: "1:315218691986:web:9863371bb3a3d96efee34b"
  };
  
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();