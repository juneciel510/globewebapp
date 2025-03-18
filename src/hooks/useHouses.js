import { cache, useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const { get, loadingState } = useGetRequest("/api/houses");
    useEffect(() => {
        const fecthHouses = async () => {
            const houses = await get();
            setHouses(houses);
        }
        fecthHouses();
    }, [get]
    );
    return { houses, setHouses, loadingState };
};

export default useHouses;
