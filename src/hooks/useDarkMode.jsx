import {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";


const useDarkMode = () => {

    const[value, setValue]= useLocalStorage(key) // key for whether or not dark mode is enabled returns an array

    useEffect(() => {
        //check to see if useLocalStorage is true or false
        // if true add the class dark-mode to the body element
        // if false remove the class from the body element
    }, []) // add what it depends on to this array


    return [value, setValue]
}

export default useDarkMode;