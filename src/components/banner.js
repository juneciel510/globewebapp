import styles from "./banner.module.css";
import { useContext } from "react";
import { navigationContext } from "./app";
import navValues from "../helpers/navValues";

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
};

const Banner = ( props) => {
    console.log(props);
    const { navigate } = useContext(navigationContext); 
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo" className={styles.logo} onClick={() => navigate(navValues.home)} />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
                {props.headerText}
            </div>
        </header>
    );
};

export default Banner;