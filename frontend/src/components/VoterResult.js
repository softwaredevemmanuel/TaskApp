import React, { useState,useEffect} from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';


const VoteResult = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      async function fetchContent() {
          try {
            const response = await axios.get('http://localhost:5000/vote-result');
            setData(response.data.message)
             
    
          } catch (error) {
       
          }
        }
  
        fetchContent();
    }, []);
    console.log(data)
    
    return (
        <div>
       
            <div>
            <h4>Vote Result</h4>
            { data.map((items,id)=>{
              return(
                   <div key={id}>
                    
                      <h4 >{items.candidateMatricNumber} </h4>
                      <h4 >{items.position} </h4>
                      <h4 >{items.matricNumber} </h4>
                      <hr/>
                   </div>
              )
         })
        }
        
          </div>
      
    </div>
     
    )
}

export default VoteResult