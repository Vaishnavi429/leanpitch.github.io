import { useState,useRef, useEffect } from "react"



export default function useOuterSide() {
    const ref = useRef(null);
    const [visible,setVisible] = useState(false)
    const HandleClickOutSide=(event)=>{
        if(ref.current && ! ref.current.contains(event.target))
        setVisible(false)

    }
    useEffect(()=>{
    document.addEventListener("click",HandleClickOutSide,true)
    return ()=>{
    document.removeEventListener("click",HandleClickOutSide,true)

    }
     
    },[visible,ref])
  return {visible,setVisible,ref}
}
