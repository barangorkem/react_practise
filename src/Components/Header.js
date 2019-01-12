import React from 'react';
import {Link} from 'react-router-dom';
const Header=(props)=> {

        var visibilityState = props.isLogin ? "visible" : "hidden";
        return (
          <div>
          <Link to="/">Home</Link>
          <Link to="/login" style={{visibility: !props.isLogin ?! "visible" : "hidden"}} >Login</Link>
          <Link to="/signup" style={{visibility: !props.isLogin ?! "visible" : "hidden"}} >Kayıt Ol</Link>
          <Link to="/profile" style={{visibility: visibilityState}} >Profile</Link>
          <Link to="/logout" style={{visibility: visibilityState}} >LogOut</Link>
          </div>
        );
    
  }


export default Header;