import React from "react";
import { NavigationProvider } from "./context/NavigationContext";
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
function App() {
    return (<NavigationProvider className = "flex">
       <Sidebar className="w-1/5"/>

        <div className="w-4/5">
            <Route to="/dropdown">
                <DropdownPage />
            </Route>
            <Route to="/accordion">
                <AccordionPage />
            </Route>
            <Route to="/buttons">
                <AccordionPage />
            </Route>
            <Route to="/modal">
                <ModalPage />
            </Route>
            <Route to="/table">
                <TablePage />
            </Route>
        </div>
    </NavigationProvider>)
}

export default App; 