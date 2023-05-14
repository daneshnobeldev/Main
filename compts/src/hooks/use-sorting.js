import { useState } from "react";

function useSorting({data,config}){

    const [sortOrder,setSortOrder] = useState(null);
    const [sortBy,setSortBy] = useState(null);

    const setSortColumn = (label) => {
        console.log(label);
        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }
        else if(sortOrder === 'desc'){
            setSortOrder(null)
            setSortBy(null)
        }
    }

    let sortedData = data;
    const column  = config.find(c => c.label === sortBy);
    if(column && column.sortValue){
        sortedData = [...data];
        const reverseOrder = sortOrder === 'asc'?1:-1;
        sortedData.sort((a,b) => {
            let valueA = column.sortValue(a);
            let valueB = column.sortValue(b);
            
            if(typeof valueA === 'string'){
                return (valueA.localeCompare(valueB)) * reverseOrder;
            }
            else{
                return (valueA - valueB) * reverseOrder;
            }
        })

    }

    return{
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    }

}

export default useSorting;