import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({ house, selectHouse }) => {
    return (
        <tr onClick={() => selectHouse(house)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {/*render when price is available*/}
            {house.price&&<td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
                {currencyFormatter.format(house.price)}
            </td>}
        </tr>
    );
};

export default HouseRow;
