import React, { useState } from 'react';
import { ClassCounter } from './components/ClassCounter';
import Counter from './components/Counter';

function App() {
  let [value, setValue] = useState('Some text here');

  return (
    <div className='App'>
      <ClassCounter />
      <Counter stringNumber='10' />
      <Counter stringNumber='20'/>

      <div style={{marginTop: "20px"}}>
        <input
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default App;
