
import './App.css';
import { useState } from 'react';
function App() {
  const [data, setData] = useState('')
  const [test, set] = useState('Click Button Test')
  return (
    <div className="App">
      <header className="App-header">
         <p>
           {test}
        </p>
        <button  className="button-30" onClick={()=>{setData('Hello World'); set('') }}>UPDATE</button>

        <p>{data}</p>
       
      </header>
    </div>
  );
}

export default App;
