import NavigationContext from "../context/NavigationContext";
import { useContext } from "react";

function useNavigation(){

    return useContext(NavigationContext);
}

export  {useNavigation};