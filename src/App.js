import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { firebase } from './helpers/firebase';

// views
import Home from './views/Home';
import Detail from './views/Detail';

// components
import Navbar from './components/Navbar';

// connect
import { connect } from 'react-redux';

//actions
import { logged } from './store/actions/login';
import { getPokemons } from './store/actions/apiActions';

class App extends Component {

  componentDidMount() {
    let self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var providerData = user.providerData;
        var uid = user.uid;
        self.props.loginSuccess(uid)
      } else {
        // User is signed out.
        // ...
      }
    });
  }
  
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pokemon/:id" component={Detail} />
            </Switch>
          </div>
        </Router>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loginSuccess: (id) => dispatch(logged(true, id)),
    fetchRandom: () => dispatch(getPokemons())
  }
}

export default connect(null, mapDispatchToProps)(App)