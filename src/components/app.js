import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";
import React, { useState, useEffect } from "react";

const App = () => {
    const [selectHouse, setSelectedHouse] = useState();
    const setSelectedHouseWrapper = (house) => {
        //do checks on house to make sure that it is a valid house
        setSelectedHouse(house);
    }
    return (
        <div>
            <Banner headerText="Providing houses all over the world" />
            {selectHouse ?( <House house={selectHouse} />)
                : (<HouseList selectHouse={setSelectedHouseWrapper} />)}
        </div>
    );
};

export default App;
