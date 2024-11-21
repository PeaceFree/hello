
import './App.css';
import { useState } from 'react';
function App() {
  const [data, setData] = useState('')
  const [test, set] = useState('Click Button Test')
  // const [AppState, setApp] = useState('background: "red"')
  return (
    <div className="App" >
      <header className="App-header" id='style' > 
         <p>
           {test}
         
        </p>
        <button className="button-30" onClick={()=>{setData('Hello World');
                document.getElementById("style").style.background ='#003c00 ';
                 set('') }}>UPDATE</button>

        <p>{data}</p>
       
      </header>
    </div>
  );
}

export default App;
