import React from 'react'

export default function Study({data,types}) {
  return (
    <div className={` ${window.innerWidth<500?'mt-2':''}   col-span-1 bg-green-400 rounded-lg flex flex-col items-center   `}>
    <svg width="79" height="79" className={`mt-5`} xmlns="http://www.w3.org/2000/svg"><path d="M33.227 1.495a1.87 1.87 0 0 1 2.646 0l1.323 1.323-27.78 27.78c-2.189 2.189-2.1 5.837.088 8.026l12.132 12.132a5.624 5.624 0 0 0 1.096 6.388 5.624 5.624 0 0 0 6.389 1.097l12.132 12.132c2.188 2.188 5.837 2.276 8.025.088l27.78-27.78 1.323 1.322a1.87 1.87 0 0 1 0 2.646L46.632 78.4a1.87 1.87 0 0 1-2.645 0L29.12 63.531a5.624 5.624 0 0 1-6.389-1.097l-5.291-5.291a5.624 5.624 0 0 1-1.097-6.388L1.478 35.89a1.87 1.87 0 0 1 0-2.646ZM59.74 22.783c1.948.27 3.83 1.117 5.325 2.612l10.583 10.583a1.87 1.87 0 0 1 0 2.646L46.544 67.727a1.87 1.87 0 0 1-2.646 0L30.67 54.498a1.872 1.872 0 0 0-2.646 0ZM49.19 6.875a1.87 1.87 0 0 1 2.647 0c4.489 4.489 5.877 8.98 6.178 12.342L27.67 49.56c.349-1.527 1.181-7.463-4.938-13.582a1.87 1.87 0 0 1 0-2.646Zm-7.936-2.646a1.87 1.87 0 0 1 2.645 0l1.323 1.323-25.134 25.134a5.619 5.619 0 0 0 0 7.938c4.005 4.005 4.2 7.696 4.043 9.335L12.15 35.978a1.87 1.87 0 0 1 0-2.646Z" fill="#F04667" fill-rule="nonzero"/>
    </svg>
                  <div className={`text-white font-normal text-2xl mt-5  `}>Study

                    {` 
                      ${types==='daily'?
                      `${  data[2].timeframes.daily.current}`:
                      `${ types==='weekly'?
                      `${  data[2].timeframes.weekly.current}`: 
                      `${data[2].timeframes.monthly.current}`
                    }`
                    } 
                    `}

                  </div>
                  <div className={`  ${window.innerWidth<500?'pb-2':''}   text-white mt-4`}>Last week 
                  {` 
                      ${types==='daily'?
                      `${  data[2].timeframes.daily.previous}`:
                      `${ types==='weekly'?
                      `${  data[2].timeframes.weekly.previous}`: 
                      `${data[2].timeframes.monthly.previous}`
                    }`
                    } 
                    `}
                  
                  </div>

                  </div>
  )
}
