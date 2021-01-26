import React, { Component } from 'react';
// import Task1 from './Tasks/Task1'
// import Button1 from './Tasks/Task2/Button1/Button1';
// import Button2 from './Tasks/Task2/Button2/Button2';
// import Button3 from './Tasks/Task2/Button3/Button3';
// import Button4 from './Tasks/Task2/Button4/Button4';
// import Button5 from './Tasks/Task2/Button5/Button5';
// import Button6 from './Tasks/Task2/Button6/Button6';
// import Button7 from './Tasks/Task2/Button7/Button7';
// import Button8 from './Tasks/Task2/Button8/Button8';
// import './app.css'
import RestaurantDetails from './Tasks/Task4/RestaurantDetails';


class App extends Component {
  // state = { 
  // Data :  [
  //   {name:"Jiten", age:"28", location:"Balasore", company:"Jio", id:1},
  //   {name:"Sibanand", age:"28", location:"Bangalore", company:"IBM", id:2},
  //   {name:"Soumya", age:"29", location:"Cuttack", company:"SMSL", id:3}
  // ]
  // }
  render() {
    return (
      <div className="App">
        {/* <div className="FirstDiv">
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
        </div>
        <div className="SecondDiv">
          <Button5 />
          <Button6 />
          <Button7 />
          <Button8 />
        </div> */}
        {/* <Task1 /> */}
        {/* <Bigtile /> */}
        <RestaurantDetails />

      </div>
    )
  }
}
export default App

