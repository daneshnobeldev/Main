import useSorting from "../hooks/use-sorting";
import Table from "./Table";
import {GoArrowSmallDown ,GoArrowSmallUp } from 'react-icons/go';

function SortedTable(props){

    const {config,data,...rest} = props;
    const {sortOrder,
        sortBy,
        sortedData,
    setSortColumn} = useSorting({data,config});

   
    const updatedConfig = config.map(column => {
        if(!column.sortValue){
            return column;
        }
        else{
            column.header = <th onClick={() => setSortColumn(column.label)}>
                <div className="flex items-center">
                {GetSortIcons(column.label,sortBy,sortOrder)}
                {column.label} IS SORTED
                </div>
            </th>
        }
        return column;
    });

    
 

   return(
    <div>
        
        <br/>
        <Table {...rest} data={sortedData} config={updatedConfig} />
    </div>
   )
}

function GetSortIcons(label,sortBy,sortOrder){
  
    if(label !== sortBy){
        return <>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </>
    }
    if(sortOrder === null){
        return <>
        <GoArrowSmallUp/>
        <GoArrowSmallDown/>
    </>
    }
    else if(sortOrder === 'asc'){
        return <>
        <GoArrowSmallUp/>
       
    </>
    }
    else if(sortOrder === 'desc'){
        return <>
       
        <GoArrowSmallDown/>
    </>
    }
  
}

export default SortedTable;