import React from 'react';
import logo from '../logo.svg';
// import { Link } from 'react-router-dom';

// connect
import { connect } from 'react-redux';

// actions
import { logged } from '../store/actions/login';

// helpers
import { firebase, provider } from '../helpers/firebase';

// var config = {
//   apiKey: "AIzaSyDtpWeX0Pdjd3tUHmObf41d06u_bSrF708",
//   authDomain: "pokepoke-320e6.firebaseapp.com",
//   databaseURL: "https://pokepoke-320e6.firebaseio.com",
//   projectId: "pokepoke-320e6",
//   storageBucket: "pokepoke-320e6.appspot.com",
//   messagingSenderId: "947313841588"
// };

// firebase.initializeApp(config);
// var provider = new firebase.auth.GoogleAuthProvider();

function googleSignIn(props) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // var token = result.credential.accessToken;
    var user = result.user;
    localStorage.setItem('authToken', user.uid)
    props.loginSuccess(user.uid)
  }).catch(function(error) {
    console.log(error);
    // // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // // ...
  });
}

function googleLogout(props) {
  firebase.auth().signOut().then(function() {
    props.logout()
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}

function Navbar(props) {

  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="">
      </div>
      <div className="">
      { !props.isLogin && <button onClick={() => googleSignIn(props)} className="button is-info">google sign-in</button>}
      { props.isLogin && <button onClick={() => googleLogout(props)} className="button is-warning">Logout</button>}
      </div>
    </header>
  )
}

const mapStateToProps = function(state) {
  return {
    isLogin: state.user.isLogin
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loginSuccess: (id) => dispatch(logged(true, id)),
    logout: () => dispatch(logged(false))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);