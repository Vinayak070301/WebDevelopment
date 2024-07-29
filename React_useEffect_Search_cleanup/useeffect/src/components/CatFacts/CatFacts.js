import React,{useEffect,useState} from 'react'
import axios from 'axios';

const CatFacts = () => {
    
    const [facts, setFacts] = useState([])
    let local=localStorage.getItem('facts');

    useEffect(() => { 
    let url = 'https://cat-fact.herokuapp.com/facts';
    if( local){
        setFacts(JSON.parse(local));
    }else{     
    axios.get(url)
    .then(({data}) =>{
        console.log(data);
        setFacts(data);
        localStorage.setItem('facts',JSON.stringify(data));
    })
    .catch((err)=>{
        console.log(err);
    })
    }
    }, [])
    
  return (
    facts.map((d,indx)=><div key={indx}>{d.text}</div>)
  )
}

export default CatFacts