import React from 'react';
import logo from './logo.svg';
import './App.css';

//================ Composition Children Props

// function App() {
//   return (
//     <div>
//       <Welcome/>
//       <p>Contents</p>
//       <Warning/>
//     </div>
//   );
// }
//
// function Welcome(){
//   return (
//     <Notification status="success">
//       <h1>Welcome</h1>
//       <p>Congratulations</p>
//     </Notification>
//   )
// }
//
// function Warning(){
//   return (
//     <Notification status="warning">
//       <p>Don't forget to pay your Invoice</p>
//     </Notification>
//   )
// }
//
// function Notification(props){
//   return (
//     // <div className="notification">
//     <div className={'notification is-'+props.status}>
//       {props.children}
//     </div>
//   )
// }


// ============= Context

const MyContext = React.createContext();

function App() {

  return (
    <MyContext.Provider value="blue">
      <header>
        <Navigation color="red"/>
      </header>
    </MyContext.Provider>
  );
}

function Navigation(props){
  return (
    <div>
      <a href='#'>Home</a>
      <a href='#'>Contact</a>

      <Search color={props.color}/>
      <Button />
    </div>
  )
}

function Button(){
  return (
    <MyContext.Consumer>
      {(context) => (
        <button>Color we get is {context}</button>
      )}
    </MyContext.Consumer>
  )
}

function Search(props){
  return (
    <div>
      <label>Search</label>
      <input type="search" placeholder={props.color} />
    </div>
  )
}

export default App;
