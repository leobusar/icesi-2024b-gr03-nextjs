"use client"; 

import { useState } from "react"

interface Props {
    value?: number;
}

export const CartCounter = ({ value=0 }: Props) => {
    const [count, setCount] =  useState(value);
    return(
        <div className="flex items-center justify-center w-80 h-80">
            <span className="text-9xl">{count}</span>
            <div className="flex">
                <button 
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2" 
                onClick={()=>setCount(count + 1)}>
                    +1
                </button>
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2"
                onClick={()=>setCount(count - 1)}>
                -1
                </button>                
            </div>
        </div>
    )
}