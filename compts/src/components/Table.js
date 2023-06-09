import { Fragment } from "react";


function Table({ data, config,keyFn }) {


    
    const renderedHeaders = <tr>{config.map(column => {
        let options = <th className="p-2" >{column.label}</th>;
        if(column.header){
           options = column.header;
        }
        
        return <Fragment key={column.label}>{options} </Fragment>
    })}
    </tr>

    // const renderCell = (rowData) => {
    //     return config.map((column) => {
    //         return <td className="p-2"> {column.render(rowData)}</td>
    //     }
    //     )
    // }

    const renderedRows = data.map((rowData) => {
        const renderCells = config.map((column) => {
            return (<td className="p-2"> {column.render(rowData)}</td>);
        });

       return (<tr key={keyFn(rowData)} className="border-b">{renderCells}</tr>);
    })

    return (<table className="table-auto border-spacing-1 ">
            <thead className=" mb-2 border-b-2 border-slate-500">
                {renderedHeaders}
            </thead>
            <tbody className="border-b-2 border-slate-500">
                {renderedRows}
            </tbody>
        </table>)
}

export default Table;