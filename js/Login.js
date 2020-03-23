// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDSqSqaYOP657FHFa75Dn8Puva4CfZUydY",
    authDomain: "my-arps.firebaseapp.com",
    databaseURL: "https://my-arps.firebaseio.com",
    projectId: "my-arps",
    storageBucket: "my-arps.appspot.com",
    messagingSenderId: "815187081808",
    appId: "1:815187081808:web:f1ebe5cfb2bd49cfb62f55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //signup function

  var SignUp = document.getElementById("Signup")
  var Loader = document.getElementById("loading")

  Signup.addEventListener("click", function(event){
    event.preventDefault();
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
     
     //firebase signup
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(function(){
       console.log("signup successfully")
     })

     .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  })

  //login function

  var LogIn = document.getElementById("Login")

  LogIn.addEventListener("click", function(event){
    event.preventDefault()
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    Loader.style.display="block"

    //firebase login 
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){
       window.location.assign("./index.html")
    })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if(errorMessage){
    document.getElementById("error").innerHTML="invalid password or email"
  }

  // ...
}); 

  })