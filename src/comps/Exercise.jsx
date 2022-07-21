import React from 'react'

export default function Exercise({data,types }) {
  return (
    <div className={`  ${window.innerWidth<500?'mt-2':''} col-span-1 bg-green-400 rounded-lg col-span-1 bg-green-400 rounded-lg flex flex-col items-center `}>
    <svg width="81" height="55" className={`mt-5`} xmlns="http://www.w3.org/2000/svg"><path d="m33.357.579 16.447.426c.33.009.645.144.88.38l9.953 9.953a4.946 4.946 0 0 1 1.451 3.311l.514 12.87c.02.503.433.895.937.894l9.595-.05a4.438 4.438 0 0 1 4.437 4.43v.26c0 1.164-.453 2.259-1.277 3.082a4.334 4.334 0 0 1-3.083 1.277h-15.77c-2.347 0-4.393-2.045-4.393-4.393l-.001-8.405-12.05-.009.01 15.17c.001.426-.21.826-.56 1.067l-18.098 12.41c-1.363.849-2.958 1.033-4.426.537a5.147 5.147 0 0 1-1.994-1.237 5.247 5.247 0 0 1-1.193-1.85c-.875-2.293.074-4.934 2.256-6.277l12.303-8.973.252-11.28-13.556.442a1.291 1.291 0 0 1-.957-.377L2.237 11.439c-1-.999-1.55-2.38-1.513-3.792a5.124 5.124 0 0 1 1.714-3.71c2.042-1.84 5.234-1.688 7.267.345l8.576 8.576 29.444-1.635-2.133-2.133-12.263.347a4.434 4.434 0 0 1-3.294-1.28l-.016-.015a4.409 4.409 0 0 1-1.294-3.307c.08-2.347 2.16-4.255 4.632-4.256Zm33.78 11.774c3.025-3.025 7.945-3.025 10.97 0 3.024 3.025 3.024 7.944 0 10.97-3.025 3.024-7.945 3.024-10.97 0-3.024-3.026-3.025-7.945 0-10.97Z" fill="#29BA66" fill-rule="nonzero"/></svg>

    <div className={`text-white font-normal text-2xl mt-5 `}>Exercise

      {` 
        ${types==='daily'?
        `${  data[3].timeframes.daily.current}`:
        `${ types==='weekly'?
        `${  data[3].timeframes.weekly.current}`: 
        `${data[3].timeframes.monthly.current}`
      }`
      } 
      `}

    </div>
    <div className={`text-white mt-4`}>Last week 
    {` 
        ${types==='daily'?
        `${  data[3].timeframes.daily.previous}`:
        `${ types==='weekly'?
        `${  data[3].timeframes.weekly.previous}`: 
        `${data[3].timeframes.monthly.previous}`
      }`
      } 
      `}
    
    </div>

    </div>
  )
}
