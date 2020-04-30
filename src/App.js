import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Welcome/>
      <p>Contents</p>
      <Warning/>
    </div>
  );
}

function Welcome(){
  return (
    <Notification status="success">
      <h1>Welcome</h1>
      <p>Congratulations</p>
    </Notification>
  )
}

function Warning(){
  return (
    <Notification status="warning">
      <p>Don't forget to pay your Invoice</p>
    </Notification>
  )
}

function Notification(props){
  return (
    // <div className="notification">
    <div className={'notification is-'+props.status}>
      {props.children}
    </div>
  )
}

export default App;
