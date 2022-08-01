import React, { useState } from 'react'

export default function Counter(props: {stringNumber: string}) {
  let [count, seCount] = useState(+props.stringNumber);

  function increment() {
    seCount(count += 1);
  }
  function decrement() {
    seCount(count -= 1);
  }

  return (
    <div>
      <h1>{count.toString()}</h1>
      <button onClick={decrement}>- Decrement -</button>
      <button onClick={increment}>+ Increment +</button>
    </div>
  )
}
