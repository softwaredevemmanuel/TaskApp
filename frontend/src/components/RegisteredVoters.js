import axios from 'axios';
import { useState, useEffect } from 'react';


function RegisteredVoters() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchContent() {
        try {
          const response = await axios.get('http://localhost:5000', {
          
          });
          setData(response.data.message)
           
  
        } catch (error) {
     
        }
      }

      fetchContent();
  }, []);
  console.log(data)


  return (
    <div>
      <h1>Registered Voters</h1>
      { data.map((items,id)=>{
              return(
                   <div key={id}>
                      <h4 >{items.Department} </h4>
                      <h4 >{items.FirstName} </h4>
                      <h4 >{items.LastName} </h4>
                      <h4 >{items.MatricNumber} </h4>
                      <h4 >{items.PhoneNumber} </h4>
                      <h4 >{items.Email} </h4>
                      <h4 >{items.Password} </h4>
                      <hr/>
                   </div>
              )
         })
        }


    </div>
  );
}

export default RegisteredVoters;
