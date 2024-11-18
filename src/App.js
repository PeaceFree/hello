
import './App.css';
import { useState } from 'react';
function App() {
  const [data, setData] = useState('')
  return (
    <div className="App">
      <header className="App-header">
         <p>
          Click Button Test 
        </p>
        <button  className="button-30" onClick={()=>setData('Hello World')}>UPDATE</button>

        <p>{data}</p>
       
      </header>
    </div>
  );
}

export default App;
