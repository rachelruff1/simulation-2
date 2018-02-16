import React, { Component } from "react";
import logo from "./Houser.png";
import "./SignIn.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {updateLogin, updateRegister, handleLogin, handleRegister} from '../../ducks/reducer';

class SignIn extends Component {
  render() {
      const { updateLogin, updateRegister, handleLogin, handleRegister} = this.props;
    return (
      <div className="sign_in_container">
        <img src={logo} alt="logo" />
        <div className="user_input">
          <label for="uname">Username</label>
          <input type="text" id="uname" className="username" onChange={e => updateUsername(e.target.value)}/>
          <label for="pword">Password</label>
          <input type="text" id="pword" className="password" onChange={e => updatePassword(e.target.value)}/>

          <div className="sign_in_buttons" />
          <button className="login_button" onClick={() => handleLogin(e.target.value)}>Login</button>
          <button className="register_button" onClick={() => handleRegister(e.target.value)}>Register</button>
        </div>
      </div>
    );
  }
}
let mapStateToProps = state => {
    const { username, password } = state;
  
    return {
      username, 
      password
    };
  }
  
  export default connect( mapStateToProps, { updateLogin, updateRegister, handleLogin, handleRegister } )( SignIn );

//<span>Username</span>
//<input placeholder="enter username" type="text" />
//<span>Password</span>
//<input placeholder="user_password" type="text" />
