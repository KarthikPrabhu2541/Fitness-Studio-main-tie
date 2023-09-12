import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trainer from "../../../assets/trainer.jpg";
import "../home.css";
import { useNavigate } from "react-router-dom";

const ThirdContainer = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/notfound");
	};

	return (
		<section id="home_third_container">
			<h1>Meet Your Coach</h1>
			<div className="trainer_details">
				<img
					src={trainer}
					alt="trainer"
				/>
				<div className="about-trainer">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nisi
						sed qui ab itaque minus veniam magnam facilis ad dolores ex
						voluptatibus earum vel iure, quasi explicabo modi esse maiores.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<button onClick={handleClick} >Know More...</button>
				</div>
			</div>
		</section>
	);
};

export default ThirdContainer;
