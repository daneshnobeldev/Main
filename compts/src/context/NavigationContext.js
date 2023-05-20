import { createContext, useState, useEffect } from "react";
import className from 'classnames';

const NavigationContext = createContext();

const NavigationProvider = ({ children,classNames }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const classes = className(
        "p-3  text-blue-500  flex flex-row gap-y-3  w-full justify-between",
        classNames);
    useEffect(()=>{
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }

        document.addEventListener("popstate",handler);

        return () =>{
            document.removeEventListener("popstate",handler);
        }

    },[])

    const navigate = ({to}) => {
        ;
    window.history.pushState({},'',to);
    setCurrentPath(to);

    }
    return (
        <NavigationContext.Provider  value={{currentPath,navigate}} >
            <div className={classes}>
            {children}
            </div>
            
        </NavigationContext.Provider>
    )
}

export { NavigationProvider }

export default NavigationContext;

