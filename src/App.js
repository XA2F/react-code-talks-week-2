// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//q1

import React from 'react';

function MyButton(props) {
  return <button>{props.title}</button>;
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="Add to cart" />
      <MyButton title="Find out more" />
    </div>
  );
}

//q2

const Avatar = (props) => {
  const { name, imageUrl, imageSize } = props.user;
  
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} style={{ width: imageSize }} />
    </div>
  );
};

const user = {
  name: 'Christopher Robin',
  imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2011%2F07%2F13%2Fchristopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5.jpg&tbnid=nS1rvO2HUn5IaM&vet=12ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fwww.npr.org%2F2011%2F07%2F13%2F137816699%2Fwill-christopher-robin-ever-grow-up&docid=0KPOynmmJAlCxM&w=765&h=573&q=christopher%20robin&ved=2ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ',
  imageSize: 90,
};

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Avatar user={user} />
    </div>
  );
}


//q3

//both buttons are same state, so they update at the same time but each button has there own state so they update separately

//hooks offer the advantage of enabling functional components to handle states without components to handle states.