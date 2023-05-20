import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";


function CarSearch() {
    const dispatch = useDispatch();
    const { searchTerm } = useSelector(state => {
        return state.cars.searchTerm;
    })
    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm({ query: event.target.value }))
    }
    return (
        <div className="list-header">
            <h4 className="is-3 title">My Cars</h4>
            <div className="field search is-horizontal is-align-items-center ">
                <label className="label"> Search </label>
                <input type="text" placeholder="search car"
                    className="input "

                    onChange={handleSearchTermChange}
                    value={searchTerm}
                />
            </div>
        </div>
    )
}

export default CarSearch;