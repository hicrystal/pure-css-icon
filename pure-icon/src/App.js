
import React from 'react';
import './App.css';
import './styles/App.scss'

const iconClassArr = ['burg','home','user','settings','mail','message','search','clock','plus', 'minus', 'times', 'divide', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play', 'pause', 'stop','record','next','prev','first','last','check'];
function App() {
     const item = iconClassArr.map((element,index)=>
      <div>
     <li key={element} className={element +' icon'}>
     </li>
     <span key={element +'-' + index} >{element}</span>
     </div>
     )
     
  return (
    <div className="App">
     <ul>{item}</ul>
     </div>
  );
}
export default App;
