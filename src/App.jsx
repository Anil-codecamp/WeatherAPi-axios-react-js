

import React, { useState } from 'react'

const App = () => {
  const[city,setCity]=useState('')
  const [wDetails,setWdetails]=useState()

  const GetData= async(e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e44d5c383f265bb8b549a56d7e74837&units=metric`)
    .then((res)=>res.json())
    .then((finalRes)=>{
      // setWdetails(finalRes)
    
      if(finalRes.cod=="404"){
        setWdetails(undefined)

      }
      else{
        setWdetails(finalRes)
        console.log(finalRes);
        
      }

    
    
      
      

    })

     


    
   

  
    e.preventDefault();
    setCity("")


  }
  
 
   
  
  return (
   <>
   <div className='w-[100%] h-[100vh] bg-green-300'>
    <div className='max-w-[1320px] mx-auto text-center'>
      <h1 className='text-[40px] font-bold py-9'>Simple Weather APP</h1>

      <form onSubmit={GetData}>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className='w-96 py-2 p-3 text-[1.4rem] ' />
      </form>


      <div className='w-[400px] mx-auto bg-white shadow-lg mt-10 p-4'>
        {wDetails!==undefined
        ?
        <>
        <h3 className='font-bold text-[30px]'>{wDetails.name}</h3>
        <h2 className='font-bold text-[40px]'>{wDetails.main.temp}℃
           </h2>
        <img src="" alt="" />
        </>
        :
        "No data found"
}

      </div>
    </div>
   </div>
   </>
  )
}

export default App
