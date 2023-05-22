import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
    const [isExpanded,setIsExpanded] = useState(false);

    const handleExpandIconClick =() => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="mb-2 rounded border">
        <div>
            <div className="flex p-2 justify-between items-center bg-indigo-500 text-white  ">
                {header}
                 <div className="cursor-pointer" onClick={handleExpandIconClick}>
                    {isExpanded?<GoChevronDown/>:<GoChevronLeft/>}
                 </div>
            </div>
            {isExpanded && <div className="p-2 border-t flex flex-col">
               {children}
               </div>}
            

        </div>
        </div>
    )
}

export default ExpandablePanel;