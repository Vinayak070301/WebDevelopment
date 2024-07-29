import React ,{useState,useEffect} from 'react'
import intialProducts from '../Cleanup/products';

const Search = () => {
    const [product, setproduct] = useState(intialProducts);
    const [search, setSearch] = useState('');
    useEffect(() => {
        let id=setTimeout(()=>{
            console.log(search);
            const filteredProduct = 
            intialProducts.filter((item) =>{
                if(item.toLowerCase().includes(search.toLowerCase())) return true;
                else return false;
            });
            setproduct(filteredProduct);
            console.log(product);
        },1000)
      return () => {
        clearInterval(id);
      }
    }, [search]);

  const inputvaluechange=(ev)=>{
    setSearch(ev.target.value);
  }  
    
  return (
    <div>
        <h1>Search Box</h1>
        <input type="text" placeholder="Search" onChange={inputvaluechange} />
        <button>Search</button>
        {product.map(((p,indx)=>{
            return <div key={indx}>{p}</div>
        }))}
    </div>
  )
}

export default Search