
const firebaseConfig = {
  apiKey: "AIzaSyDhIYzCyVyqpOnV10dPfgb0vA5rgfYK7WM",
  authDomain: "practice-624e3.firebaseapp.com",
  databaseURL: "https://practice-624e3-default-rtdb.firebaseio.com",
  projectId: "practice-624e3",
  storageBucket: "practice-624e3.appspot.com",
  messagingSenderId: "232639783684",
  appId: "1:232639783684:web:d56f56d5fa7dc807c86651"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


