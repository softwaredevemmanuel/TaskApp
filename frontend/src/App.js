import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchContent() {
        try {
          const response = await axios.get('http://localhost:5000/movies', {
          
          });
          setData(response.data)
           
  
        } catch (error) {
     
        }
      }

      fetchContent();
  }, []);
  console.log(data)


  return (
    <div>
      <h1>HELLO</h1>
      { data.map((items,id)=>{
              return(
                   <div key={id}>
                      <h4 >{items.movie} </h4>
                   </div>
              )
         })
        }


    </div>
  );
}

export default App;
