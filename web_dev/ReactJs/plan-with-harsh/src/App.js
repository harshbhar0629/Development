import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {
    const [tours, setTours] = useState(data);

    // by this function we can update our UI by new Tours by filtering via id(always unique)
    function removeTour(id) {
        const newTour = tours.filter(tour => tour.id != id);
        setTours(newTour);
    }

    if (tours.length === 0) {
        return (
            <div className="refresh">
                <h2>No Tours Left</h2>
                <button className="btn-refresh" onClick={() => setTours(data)}>Refresh</button>
            </div>
        )
    }

    return (
        <div className="App">
            {/* passing tour data in Tours component it handle all Tours, (removeTour)it removes that card which is not interested  */}
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    );
};

export default App;