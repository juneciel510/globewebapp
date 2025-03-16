const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
};

const Banner = ({ children }) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo"  />
            </div>
            <div >
                Providing houses all over the world
            </div>
        </header>
    );
};

export default Banner;