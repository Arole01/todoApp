//initialize the context
import { createContext, useState, useEffect } from "react";
export const context = createContext()

//step 2 create a provider as a function

export const NameContext =({children})=>{

    const [names,setnames]= useState("")
    const [realName,setRealname] = useState(()=>{
        const check = localStorage.getItem("ourinfo")
        if (!check || check =="undefined"){
            return""
        }else{
            return JSON.parse(check)
        }
    })

    useEffect(()=>{
        localStorage.setItem("ourinfo",JSON.stringify(realName))
    },[realName])

    return (
        <context.Provider value={{names,setnames,setRealname,realName}}>
            {children}
        </context.Provider>
    )
}