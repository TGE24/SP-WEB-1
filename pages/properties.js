import Properties from "../src/pages/property";
import HousesModel from "../src/models/HouseProperty";

const AllProperties = ({ HousesProp }) => {
	return <Properties HousesProp={HousesProp} />;
};

AllProperties.getInitialProps = async () => {
	const HousesQuery = await HousesModel.getHouses();
	const Houses = await HousesModel.houses.houses;
	return { HousesProp: Houses };
};

export default AllProperties;
