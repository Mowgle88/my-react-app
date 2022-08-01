import React, { useState } from 'react';
import { ClassCounter } from './components/ClassCounter';
import Counter from './components/Counter';

function App() {

  return (
    <div className='App'>
      <ClassCounter count={5}/>
      <Counter stringNumber='10' />
      <Counter stringNumber='20'/>
    </div>
  );
}

export default App;
