import React from "react";
import "./home.css";
import FirstContainer from "./containers/FirstContainer";
import SecondContainer from "./containers/SecondContainer";
import ThirdContainer from "./containers/ThirdContainer";
import FourthContainer from "./containers/FourthContainer";
import FifthContainer from "./containers/FifthContainer";

const Home = () => {
	return (
		<div className="home-container">
			<FirstContainer />
			<SecondContainer />
			<ThirdContainer />
			<FourthContainer />
			<FifthContainer />
		</div>
	);
};

export default Home;
