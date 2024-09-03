import { useEffect, useState } from "react";
import axios from 'axios';

import "./App.css";

function App() {
  const [dataJson, setDataJson] = useState([]);

  useEffect(() => {
    axios.get('/api/Data')  
      .then((response) => {
        setDataJson(response.data);  
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);  

  return (
    <>
      <h1>Your Data</h1>
      <div>
        {
          dataJson.map((item) => (  
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h1>{item.content}</h1>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
