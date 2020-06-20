import Properties from "../src/pages/property";
import HousesModel from "../src/models/HouseProperty";

const AllProperties = ({ houses }) => {
	return <Properties HousesProp={houses} />;
};

AllProperties.getInitialProps = async () => {
	const HousesQuery = await HousesModel.getHouses();
	const Houses = await HousesModel.houses.houses;
	return {
		houses: Houses,
	};
};
export default AllProperties;
