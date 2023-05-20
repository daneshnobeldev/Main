import { useDispatch, useSelector } from "react-redux";
import { removeCar } from '../store';
function CarList() {
    const  {name,searchTerm,list}  = useSelector(({form:{name},cars:{searchTerm,list}}) => {
        ;
          return {
            searchTerm : searchTerm,
            list : list.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase())),
            name:name
          }
    });
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(removeCar({ id: id }))
    }

    return (
        <div className="car-list panel">
            {/* <p>My Cars</p> */}
            {list && list.map(car => {
                ;
            const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
            return <div key={car.id} className={`panel ${bold && 'bold'}`}>
                    <p>{car.name} - ${car.cost}</p>
                    <button 
                    className="button is-danger"
                    onClick={() => {
                        handleDelete(car.id)
                    }}
                    >Delete</button>
                </div>
            })}
        </div>
    )




}

export default CarList;