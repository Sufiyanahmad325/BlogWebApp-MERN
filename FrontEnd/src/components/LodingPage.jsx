import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from "../App";


function LodingPage() {
    const [dot, setDot] = useState('')
    const {isLoading } = useContext(BlogContext)


    useEffect(()=>{
        let timer ;

        if(isLoading){
            timer = setInterval(()=>{
                if(dot.length > 4){
                    setDot('.')
                }
                else{
                    setDot(prev=> prev += '.')
                }
            },500)
        }else{
            setDot('')

        }

        return ()=> clearInterval(timer)

    } ,[dot , isLoading])

    
    
    return isLoading && (
        <div className="fixed inset-0 flex justify-center items-center flex-col
                        bg-black/40 backdrop-blur-sm z-50 gap-2">

            <div className="w-20 h-20 border-9 border-gray-300 
                            border-t-green-400 rounded-full animate-spin">                  
            </div>

            <p className='text-2xl text-white'> Loading{dot}</p>

        </div>
    )
}

export default LodingPage
