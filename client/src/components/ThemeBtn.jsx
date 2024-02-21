import useTheme from "../contexts/theme";
import {BiSun} from "react-icons/bi";
import {FaMoon} from "react-icons/fa";
import {CgDarkMode} from "react-icons/cg"

const ThemeButton = () => {
    const {themeMode, lightTheme, darkTheme} = useTheme();
    const onChangeBtn = (e)=>{
       if(themeMode==="dark"){
        lightTheme();
       }else{
        darkTheme();
       }
    }
  return (
    <button
     aria-label="Toggle Dark Mode"
     type="button"
     className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
     onClick={onChangeBtn}>
        {themeMode === "dark" ?(
            <BiSun className="h-6 w-6 dark:text-white animate-spin"/>
        ):(
            <CgDarkMode className="h-6 w-6"/>
        )}
    </button>
  )
}

export default ThemeButton