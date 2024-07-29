import React ,{useEffect, useState} from 'react'
import products from './products'

const Cleanup = () => {
    const [product, setproduct] = useState("");
    useEffect(() => {
        let id=setTimeout(()=>{
            console.log(product);
        },2000)
      return () => {
        clearInterval(id);
      }
    }, [product]);

  const inputvaluechange=(ev)=>{
    setproduct(ev.target.value);
  }  
    
  return (
    <div>
        <h1>Search Box</h1>
        <input type="text" placeholder="Search" onChange={inputvaluechange} />
        <button>Search</button>
        <ul>
            
        </ul>
    </div>
  )
}

export default Cleanup