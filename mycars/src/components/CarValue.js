import { useSelector } from 'react-redux';

function CarValue() {
    const cost = useSelector(({ cars: { searchTerm, list } }) => {
        return list.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    ).reduce((acc,car) => acc+=parseInt(car.cost),0)

    return <div>{cost > 0 && <p>${cost}</p>}</div>
}

export default CarValue;