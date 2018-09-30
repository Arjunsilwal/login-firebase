import React, { Component } from 'react';
var firebase = require('firebase');


var config = {
  apiKey: "AIzaSyDHSfbh3TJcRuAtmNYT61laxCC5epVC258",
  authDomain: "loginapp-8708d.firebaseapp.com",
  databaseURL: "https://loginapp-8708d.firebaseio.com",
  projectId: "loginapp-8708d",
  storageBucket: "loginapp-8708d.appspot.com",
  messagingSenderId: "163242438871"
};
firebase.initializeApp(config);

class Validate extends Component {
  constructor(props){
    super(props);

    this.state = {
      err:''
    };
      this.login= this.login.bind(this);
      this.signup= this.signup.bind(this);
      this.logout= this.logout.bind(this);

  }

  logout(){
    firebase.auth.signOut();
    var lout = document.getElementById('logout');
    lout.classList.add("hide");
  }


  signup(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();
  const promise =  auth.createUserWithEmailAndPassword(email, password);
promise.then( user => {
  var err = "welcome" + user.email;
  firebase.database.ref('users/' + user.uid).set({
    email: user.email
  });
  console.log(user);
  this.setState({err: err});
});
promise
.catch(e => {
  var err = e.message;
  console.log(err);
  this.setState({err:err});
});
  }

  login(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, password);

  promise.then(user => {
    var lout = document.getElementById('logout');
    lout.classList.remove("hide");
  })

  promise.catch( e => {
    var err = e.message;
    console.log(err);
    this.setState({err:err});
  });

  }


  render(){
    return(
      <div>
      <input id='email' ref='email' type='email' placeholder='Enter your email' /><br />
      <input id='pass' ref='password' type='password' placeholder='Enter your password' /><br />
      <p>{this.state.err}</p>

      <button onClick={ this.login}>Log In</button>
      <button onClick={ this.signup}>Sign UP</button>
      <button onClick={this.logout} id="logout" className="hide">Log Out</button>
      </div>
    );
  }
}

export default Validate;
