import { useParams } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import axios from 'axios';




const Details = () => {
    const { email: contentParam } = useParams();
    const [data, setData] = useState([])


    useEffect(() => {

      async function fetchManifesto() {
          try {
            const response = await axios.get('http://localhost:5000/manifesto',{
                headers:{
                    email : contentParam
                }
            });
            setData(response.data.message)

          } catch (error) {
       
          }
        }
  
        fetchManifesto();
    }, []);
    console.log(contentParam)

  return (
    <div>
        <h1>Details</h1>

        {/* { data.map((items,id)=>{
              return(
                   <div key={id}>
                    
                      <h4 >{items.Department} </h4>
                      <h4 >{items.FirstName} </h4>
                      <h4 >{items.LastName} </h4>
                      <h4 >{items.Manifesto} </h4>
                      <hr/>
                   </div>
              )
         })
        } */}
    </div>
  )
}

export default Details