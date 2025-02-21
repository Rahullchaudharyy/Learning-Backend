import './App.css'
import { useState, useEffect } from 'react'  // Correct import

function App() {
   const [data, setData] = useState(null)  // Fixed state setter name

   useEffect(() => {
      const fetchData = async () => {
         try {
            const allData = await fetch('http://localhost:3000/todos/') 
            const result = await allData.json()
            setData(result)  
         } catch (error) {
            console.error("Error fetching data:", error)
         }
      }

      fetchData()  
   }, [])  

   return (
      <div>
         {data ? (
            <ul>
               {data.map((todo, index) => (
                  <li key={index}>{todo.Todo}</li>
               ))}
            </ul>
         ) : (
            <p>Loading...</p>  
         )}


         <form action="">

         </form>
      </div>
   )
}

export default App
