import { changeName, changeCost, addCar } from "../store";
import { useDispatch, useSelector } from "react-redux";
import './carform.css';
function CarForm() {

    const dispatch = useDispatch();
    const { name, cost } = useSelector(state => {
        return state.form;
    })
   
    const handleNameChange = (event) => {
        dispatch(changeName({ name: event.target.value }))
    }
    const handleCostChange = (event) => {
        dispatch(changeCost({ cost: event.target.value  }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({
            car: {
                name, cost
            }
        }))

    }
    return (
      <div  className="car-form panel notification is-primary">
          <h4 className="subtitile is-3">Add Car</h4>
        <form onSubmit={handleSubmit}>
            
            <div className="field-group">
            <div className="field is-horizontal">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input is-expanded" onChange={handleNameChange} value={name} type="text" placeholder="Enter car name" />
                </div>
            </div>
            <div className="field is-horizontal">
                <label className="label">Cost</label>
                <div className="control is-expanded">
                    <input className="input " type="number" onChange={handleCostChange} value={cost} placeholder="Enter cost" />
                </div>
            </div>
            </div>
            <div className="field submit">
                <button className="button  is-link" type="submit">Submit</button>
            </div>
        </form>
      </div>
    )
}

export default CarForm;