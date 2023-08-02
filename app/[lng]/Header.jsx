
"use client";
import useThemeSwitcher from "./components/hooks/useThemeSwitcher";
import { SunIcon , MoonIcon } from "./components/Icons";
export const Header = () => {
    
    const [mode, setMode] = useThemeSwitcher();

    return (
        <button 
        onClick={() => setMode(mode === "light" ? "dark": "light") }
        className= {`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light": "bg-light text-dark"}`}
        >

        {
        mode === "dark" ?
            
        <SunIcon className={"fill-dark"} />
        : <MoonIcon className={"fill-dark"} />
        }
        </button>
  
    )
  }
  

  
  