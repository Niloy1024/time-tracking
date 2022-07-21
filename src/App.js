import React, { useState,useEffect } from 'react';
import Landing from './Landing';

function App() {
  const [data,setdata] = useState()
  const [loading,setloading] = useState(true)
  async function  fetchdata(){
    const mydata = await fetch('data.json')
    const retdata = await mydata.json();
    console.log(retdata)
    return retdata
  }
  
  useEffect(() => {

    const Data = fetchdata()

    Data.then(x=>{setdata(x);return x}).then(setloading(false))
    setdata(Data)

  }, [ ]
  )
  
  


  
  if(!loading)return( 
    <Landing  data={data }/>
  )
  else{
    return(
      <>sjlcbcbkj</>
    )
  }
}

export default App;
