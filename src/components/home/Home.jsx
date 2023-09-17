import React from "react";
import "./home.css";
import FirstContainer from "./containers/FirstContainer";
import SecondContainer from "./containers/SecondContainer";
import ThirdContainer from "./containers/ThirdContainer";
import FifthContainer from "./containers/FifthContainer";

const Home = () => {
	return (
		<div className="home-container">
			<FirstContainer />
			<hr id="horizontal"></hr>
			<SecondContainer />
			<hr id="horizontal"></hr>
			<ThirdContainer />
			<hr id="horizontal"></hr>
			<FifthContainer />
		</div>
	);
};

export default Home;
