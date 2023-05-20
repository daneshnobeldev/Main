import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";

function App() {
    return (<div className="container is-fluid p-5 ">
        <div className="">

            <CarForm />
            <CarSearch />
            <CarList />
            <CarValue />

        </div>
    </div>)
}

export default App;