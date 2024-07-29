import React, { useEffect, useState } from 'react'

const CatFacts = () => {
    
const [val, setValue] = useState(0);
const [data, setdata] = useState([])
useEffect(() => {
       fetch('https://cat-fact.herokuapp.com/facts')
       .then(res => res.json())
       .then(data =>{
        setdata(data);
       })
  }, [data])
  
  return (
    <div>
        {val}
        <button onClick={()=>setValue(val+1)}>Click Me</button>
        <ul>
          {
            data.map((item) => <li key={item._id}>{item.text}</li>)
          }
        </ul>
    </div>
  )
}

export default CatFacts