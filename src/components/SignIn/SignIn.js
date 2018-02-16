import React, { Component } from "react";
import logo from "./Houser.png";
import "./SignIn.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {updateUsername, updatePassword} from '../../ducks/reducer';
import axios from 'axios';

class SignIn extends Component {
constructor(){
    super()
    this.state=({
        username: '',
        password: ''
    })
}

updateUsername(){
this.setState = {
}
}

updatePassword(){

}
// handleLogin (){

// }

handleRegister(){
    axios
    .put('/api/register', this.state.username, this.state.password)
    .then(alert('Good job!'))
    .catch(console.log())
}
//****history.push and redirect from Router

  render() {
      const { updateUsername, updatePassword} = this.props;
    return (
      <div className="sign_in_container">
        <img src={logo} alt="logo" />
        <div className="user_input">
          <label for="uname">Username</label>
          <input type="text" id="uname" className="username" onChange={e => updateUsername(e.target.value)}/>
          <label for="pword">Password</label>
          <input type="text" id="pword" className="password" onChange={e => updatePassword(e.target.value)}/>

          <div className="sign_in_buttons" />
          <button className="login_button" onClick={this.handleLogin()}>Login</button>
          <button className="register_button" onClick={this.handleRegister()}>Register</button>
        </div>
      </div>
    );
  }
}
let mapStateToProps = state => {
    const { username, password } = state;
  
    return {
      username, 
      password,
    };
  }
  
  export default connect( mapStateToProps, { updateUsername, updatePassword} )( SignIn );


