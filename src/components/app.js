import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";
import navValues from "../helpers/navValues";
import React, { useState, useEffect, useCallback } from "react";
import ComponentPicker from "./componentPicker";

const navigationContext = React.createContext(navValues.home);

const App = () => {
    const navigate = useCallback(
        (navTo,param) => {
            setNav({ current: navTo,param, navigate });
        },
        []
    );
    const [nav, setNav] = useState({current:navValues.home,navigate});

    return (
        <navigationContext.Provider value={nav}>
        <div>
            <Banner headerText="Providing houses all over the world" />
            </div>
            <ComponentPicker currentNavLocation={nav.current} />
        </navigationContext.Provider>
        
    );
};

export { navigationContext };
export default App;
