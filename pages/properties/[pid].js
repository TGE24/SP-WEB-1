import Property from "../../src/pages/singleProperty";
import Theme from "../../Theme";
import HousesModel from "../../src/models/HouseProperty";

const PropertyDetail = ({ HouseProp }) => {
	return (
		<Theme>
			<Property HouseProp={HouseProp} />
		</Theme>
	);
};

PropertyDetail.getInitialProps = async ({ query }) => {
	const HouseQuery = await HousesModel.getHouse(
		query?.pid || "house-9rxu2pvmko"
	);
	const House = await HousesModel.house;
	return { HouseProp: House };
};

export default PropertyDetail;
