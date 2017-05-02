function toggleSignIn() {
    if (!firebase.auth().currentUser) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithRedirect(provider);
    } else {
    firebase.auth().signOut();
    }
    document.getElementById('quickstart-sign-in').disabled = true;
}

function initApp() {
    firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
        var token = result.credential.accessToken;
        document.getElementById('quickstart-oauthtoken').textContent = token;
    } else {
        document.getElementById('quickstart-oauthtoken').textContent = 'null';
    }
    var user = result.user;
    }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('You have already signed up with a different auth provider for that email.');
    } else {
        console.error(error);
    }
    });
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('quickstart-sign-in').textContent = 'Sign out';
    } else {
        document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
    }
    document.getElementById('quickstart-sign-in').disabled = false;
    });
    document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
}
window.onload = function() {
    initApp();
};
