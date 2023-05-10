import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import classNames from "classnames";

function Link({to,children,className,activeClassName}){

    
    const {navigate} = useContext(NavigationContext);
    const classes = classNames(className,activeClassName);
    const handleClick = (event) => {
        debugger;
        if(event.ctrlKey || event.metaKey){
            return;
        }
        else{
            event.preventDefault();
            console.log(`user navigating to ${to}`);
            navigate({to});
        }
    }

    return(<div className={classes}>
        <a onClick={handleClick} href={to}>{children}</a>
    </div>)
}

export default Link;
