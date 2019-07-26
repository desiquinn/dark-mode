import {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";


//useDarkMod(false)  -----> [value, setValue]

const useDarkMode = (initialValue) => {
    // key for whether or not dark mode is enabled returns an array
    const[darkMode, setDarkMode]= useLocalStorage("dark-mode", initialValue);

    useEffect(() => {
        //check to see if useLocalStorage is true or false
        if (darkMode) {
            // if true add the class dark-mode to the body element
           document.body.classList.add('dark-mode');
        } else {
            // false remove the class from the body element
            document.body.classList.remove("dark-mode")
        }
             
    }, [darkMode]) // add what it depends on to this array


    return [darkMode, setDarkMode]
}

export default useDarkMode;