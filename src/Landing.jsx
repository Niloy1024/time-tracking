import React, { useState } from 'react';
import Iconimg from './images/image-jeremy.png'
import Work from './comps/Work';
import Play from './comps/Play';
import Study from './comps/Study';
import Exercise from './comps/Exercise';
import Social from './comps/Social';
import Selfcare from './comps/Selfcare';

export default function Landing({data }) {

    const [types,settypes] = useState('daily')
  return ( data[0]!==undefined &&
    <div className={`flex justify-center items-center w-[90%] h-[100%]  ${window.innerWidth>500?'mt-20':''}  max-w-[1000px] mx-auto`}>
    
      <div className={`${window.innerWidth>500?' grid grid-cols-4 gap-2 h-[80%] ':''} h-[100%] w-full  `}>
        <div className={  `   ${window.innerWidth>500?'col-span-1   ':'flex flex-col items-center justify-between'} h-[100%] rounded-lg bg-violet-600   `  }>
          <div className={` ${window.innerWidth<500?'flex items-center mr-3':''}  `}>
          <img src={Iconimg} alt='bals' className={`  ${window.innerWidth>500?'w-[70%] ':'w-[40%]'} mx-auto m-5 pl-2  `}/>
          <div className={`text-center`}>
          <p className={`text-white  ${window.innerWidth>500?'text-lg mt-5 font-lg':'font-normal text-sm '} `}>Report for</p>
          <p className={`text-white font-semibold text-2xl pl-4`}>Jeremy Corbin</p>
          </div>
          </div>
          
          <div className={`${window.innerWidth<500?'mb-3':'flex-col'} flex w-[100%] justify-evenly items-center`}>
            
            <p className={`text-slate-400 cursor-pointer pt-3 ${types==='daily'?'text-slate-800 font-semibold  text-xl   ':''} `} onClick={x=>settypes('daily')}>Daily</p>
            <p className={`text-white cursor-pointer pt-3  ${types==='weekly'?'text-slate-800 font-semibold text-xl ':''}  `} onClick={(x)=>settypes('weekly')}>Weekly</p>
            <p className={`text-white cursor-pointer pt-3  ${types==='monthly'?'text-slate-800 font-semibold  text-xl ':''}  `} onClick={(x)=>settypes('monthly')}>Monthly</p>
          </div>
          </div>

          <div className={` ${window.innerWidth>500?'col-span-3':''}   `}>
            <div className={`  ${window.innerWidth>500?'grid grid-rows-2 gap-1 w-[100%] h-[100%] ':''}    `}>
              <div className={`  ${window.innerWidth>500?' row-span-1 w-[100%] h-[100%] ':''}   `}>
                <div className={`   ${window.innerWidth>500?' grid grid-cols-3 gap-2 w-[100%] h-[100%] ':''}    `}>
                  <Work data={data} types={types}/>
                  <Play data ={data} types={types} />
                  <Study data={data} types={types}/>
                </div>
              </div>
              <div className={` ${window.innerWidth>500?' row-span-1 w-[100%] h-[100%]  ':''}    `}>
                
                <div className={`  ${window.innerWidth>500?'  grid grid-cols-3 gap-2 w-[100%] h-[100%] ':''}   `}>
                  <Exercise  data={data} types={types} />
                  <Social data={data} types={types} />
                  <Selfcare data={data} types={types} />
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}
