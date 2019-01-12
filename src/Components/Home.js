import React from 'react';
import List from './List';
const Home=(props)=> {

    return (
      <div>  
      Home
    <List user={props.user}/>
      </div>
    );
  }

export default Home;
