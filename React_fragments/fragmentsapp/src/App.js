import React, { useState } from 'react'
import MyFragment from './MyFragment';

const App = () => {
  const [val,setValue]=useState(0);
  return (
    <MyFragment>
        <h1>Counter</h1>
        <button onClick={()=>setValue(val+1)}>Click Me :{val}</button>
    </MyFragment>
  )
}

export default App
