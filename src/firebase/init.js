import firebase from 'firebase' 
import firestore from 'firebase/firestore' 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCnRlNDIxxmpleL7DS4T-UuWptg1V4H8Dg",
    authDomain: "smoothie-app-70b8a.firebaseapp.com",
    databaseURL: "https://smoothie-app-70b8a.firebaseio.com",
    projectId: "smoothie-app-70b8a",
    storageBucket: "smoothie-app-70b8a.appspot.com",
    messagingSenderId: "898633709581",
    appId: "1:898633709581:web:362be2de15957f466fbd44"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

 /* firebaseApp.firestore().settings({
      timestampsInSnapshots: true
  })
  */
 
  export default firebaseApp.firestore()