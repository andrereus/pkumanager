/**
 * Function called when clicking the Login/Logout button.
 */
function toggleSignIn() {
  if (!firebase.auth().currentUser) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  } else {
    firebase.auth().signOut();
    window.location.href = "index.html";
  }

  // document.getElementById('sign-in').classList.add('disabled');
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 *  - firebase.auth().getRedirectResult(): This promise completes when the user gets back from
 *    the auth redirect flow. It is where you can get the OAuth access token from the IDP.
 */
function initApp() {
  // Result from Redirect auth flow.
  firebase
    .auth()
    .getRedirectResult()
    .then(function (result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
      }

      // The signed-in user info.
      var user = result.user;
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      if (errorCode === "auth/account-exists-with-different-credential") {
        alert("You have already signed up with a different auth provider for that email.");
        // If you are using multiple auth providers on your app you should handle linking
        // the user's accounts here.
      } else {
        console.error(error);
      }
    });

  // Listening for auth state changes.
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      document.getElementById("storage").innerHTML =
        '<i class="fas fa-user"></i> ' + user.displayName + ' <i class="fas fa-angle-down"></i>';
      // document.getElementById('sign-in').innerHTML = '<i class="fas fa-sign-out-alt"></i> Sign out';
    } else {
      // User is signed out.
      document.getElementById("storage").innerHTML = 'Menu <i class="fas fa-angle-down"></i>';
      // document.getElementById('sign-in').innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign in with Google';
    }

    // document.getElementById('sign-in').classList.remove('disabled');
  });

  // document.getElementById('sign-in').addEventListener('click', toggleSignIn, false);
}

window.onload = function () {
  initApp();
};
