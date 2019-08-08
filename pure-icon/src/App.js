
import React from 'react';
import './App.css';
import './styles/App.scss'


const iconClassArr = ['burg','home','user','settings','mail','message','search','clock','plus', 'minus', 'times', 'divide', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play', 'pause', 'stop','record','next','prev','first','last'];
function App() {
  const item = iconClassArr.map(element=> 
     <li key={element}>
     <span className={element +' icon'} ></span>
     <span>{element}</span>
     </li>
  )
  return (
    <div className="App">
     <ul>{item}</ul>

     </div>
  );
}


export default App;
