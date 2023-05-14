import SortedTable from "../components/SortedTable";

function TablePage(){

    const data = [
        {name:'Apple',color:'bg-red-500',score:5},
        {name:'Banana',color:'bg-yellow-500',score:4},
        {name:'Lime',color:'bg-green-500',score:3},
        {name:'Grape',color:'bg-purple-500',score:1},
        {name:'Orange',color:'bg-orange-500',score:5}

    ]

    const config = [
        {
            label:'Fruit', 
            render: fruit => fruit.name,
            sortValue: fruit => fruit.name

        },
        {label:'Color',
        render: fruit => <div className={`p-2 m-2 ${fruit.color}`}></div>
    },
        {label:'Score',
        render: fruit => fruit.score,
        sortValue : fruit => fruit.score
    },
        {label:'Discount 25% Off',
        render: fruit => fruit.score * .75,

    },

    ]

    const keyFn = (fruit) => {
        return fruit.name
    }

    return(
        <div className="px-5">
            <SortedTable data={data} config={config} keyFn={keyFn} />   
        </div>
    )
}

export default TablePage;