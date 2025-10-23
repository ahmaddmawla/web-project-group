import {useEffect,useState} from "react"

export default function ThemeToggle(){
  const [dark,setDark]=useState(()=>localStorage.getItem("theme")==="dark")

  useEffect(()=>{
    const root=document.documentElement
    if(dark){
      root.classList.add("dark")
      localStorage.setItem("theme","dark")
    }else{
      root.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  },[dark])

  return (
    <button
      onClick={()=>setDark(v=>!v)}
      className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700"
      aria-label="Toggle theme"
      title={dark?"Switch to light mode":"Switch to dark mode"}
    >
      {dark?"Dark":"Light"}
    </button>
  )
}
