import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({items}) {

    const [expandedIndex, setExpandedIndex] = useState(-1);
   
    const handleToggle = (nextIndex) => {

        setExpandedIndex((current) => {
            if(nextIndex === current){
                return -1;
            }
            else{
                return nextIndex;
            }
        });

        

    }
    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex;
        const icon = isExpanded ? <GoChevronDown/>:<GoChevronLeft/>

        return (
            <div className="" key={item.id}>
                <div className="flex border-b bg-slate-50 p-3 items-center justify-between" onClick={() => {
                    handleToggle(index);
                }}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="flex border p-5">{item.content}</div>}
            </div>
        )
    });

    return (
        <div>
            {renderedItems}
        </div>
    )
}

export default Accordion;
