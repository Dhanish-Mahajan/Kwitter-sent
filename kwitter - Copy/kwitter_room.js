
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDrm9SePjKGmSRzg8SJOs-vg2lmScK1sXA",
      authDomain: "kwitter-6f022.firebaseapp.com",
      projectId: "kwitter-6f022",
      storageBucket: "kwitter-6f022.appspot.com",
      messagingSenderId: "308671832869",
      appId: "1:308671832869:web:c20f3dc45524159508f0cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database.ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_room.html";
    }
    //End code



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div>"

document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
window.location="login.html"
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="login.html";
}