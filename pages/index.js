import React, { useEffect } from "react";
import Home from "../src/pages/home";
import Theme from "../Theme";
import Auth from "../helpers/auth";

export default () => {
	useEffect(() => {
		Auth.init();
	}, []);
	return (
		<Theme>
			<Home />
		</Theme>
	);
};
