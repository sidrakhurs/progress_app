

import React from 'react'
import { setProgress } from './Redux/progressSlice'
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch=useDispatch() ;
  const progress=useSelector((state)=>(state.progress.value))
 const handlechange=(e)=>{
  let finalvalue=parseFloat(e.target.value);
  finalvalue = isNaN(finalvalue) ? 0 : Math.max(0, Math.min(100, finalvalue));
    dispatch(setProgress(finalvalue));
 }

  return (
    <>
     <div className="maincontainer flex items-center justify-center bg-black h-[100vh]">
      <div className="box bg-white h-[80%] w-[50%] p-[20px]  ">
        <h1 className='text-4xl'>Progress bar</h1>
        
        <div className="inputcontainer">
        <div className="Progress">
      <div className="progress-done" style={{ width: `${progress}%` }}>
        {progress !== 0 && `${Math.round(progress)}%`}
      </div>
    </div>
        <div className="barinput">
            <h2 className='pt-8 text-xl'>input percentage:</h2>
            <input type="Number" className="input " placeholder='0%'onInput={handlechange}/>
        </div>
      
    </div>
      </div>
    </div>
    </>
  )
}

export default App
