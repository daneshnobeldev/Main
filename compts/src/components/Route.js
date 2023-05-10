import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";



function Route({children,to}){
    debugger;
    const {currentPath} = useContext(NavigationContext);

    if(to === currentPath){
        return children;
    }
    else{
        return null
    }
   
}

export default Route;