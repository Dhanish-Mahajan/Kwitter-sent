
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDrm9SePjKGmSRzg8SJOs-vg2lmScK1sXA",
    authDomain: "kwitter-6f022.firebaseapp.com",
    databaseURL: "https://kwitter-6f022-default-rtdb.firebaseio.com",
    projectId: "kwitter-6f022",
    storageBucket: "kwitter-6f022.appspot.com",
    messagingSenderId: "308671832869",
    appId: "1:308671832869:web:c20f3dc45524159508f0cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      username=document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({
          purpose : "add user"
      });
  }