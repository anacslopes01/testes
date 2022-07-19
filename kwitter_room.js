const firebaseConfig = {
  apiKey: "AIzaSyDiUh3UMbu9W9raIq9nI7lOGkQ5y_49mKg",
  authDomain: "site-kwitter.firebaseapp.com",
  databaseURL: "https://site-kwitter-default-rtdb.firebaseio.com",
  projectId: "site-kwitter",
  storageBucket: "site-kwitter.appspot.com",
  messagingSenderId: "60350141535",
  appId: "1:60350141535:web:4adcf23bd705b3d21577ea"
};

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("userName");
document.getElementById("output").innerHTML = "";

function logout() {
  localStorage.removeItem("userName");
  window.location = "kwitter.html";
}
function addRoom() {
  roomName = document.getElementById("roomName");
  firebase.database().ref("/").child(roomName).update({ purpose: "adicionar nome de sala" });
  localStorage.setItem("roomName", roomName);
  window.location = "kwitterPage.html";
}
//Início do código

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
    childKey = childSnapshot.key;
    roomName = childKey;
    row = "<div class='roomName' id=" + roomName + " onclick='redirectToRoomName(this.id)' >#" + roomName + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      //Fim do código

    });
  });
};
function redirectToRoomName() {
  localStorage.setItem("roomName", roomName);
  window.location = "kwitter_page.html";
}
getData();