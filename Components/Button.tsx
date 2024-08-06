"use client"

export function Button(){
    function handler(){
        console.log("hello");
    }
    
    return <button onClick={handler} type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">Sign in</button>
}