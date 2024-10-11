"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage(){
    const [login, setLogin] = useState(""); 
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onSubmit = () => {
        if (login && password)
            router.push("/about")
        else
            alert("Please fill all fields")
    }
    
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1>Login Page</h1>
            <label className="mt-4">Login</label>
            <input type="text" 
            className="w-80 h-8 px-2 border border-solid border-block rounded text-black" 
            value={login} onChange={(e)=>setLogin(e.target.value)}/>
            <label className="mt-4">Password</label>
            <input type="password" 
            className="w-80 h-8 px-2 border border-solid border-block rounded text-black" 
            value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button 
            className="mt-4 p-2 bg-gray-900 text-white rounded hover:bg-gray-600 transition-all"
            onClick={onSubmit}>
                Login
            </button>

        </div>
    )
}