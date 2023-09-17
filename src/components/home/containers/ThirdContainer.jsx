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
			<h1>Trainers</h1>
			<div className="trainer_details">
				<img
					src={trainer}
					alt="trainer"
				/>
				<div className="about-trainer">
					<p>
						Get to know the trainers that will be coaching you throughout your fitness journey
					</p>
					<button onClick={handleClick} >Know More...</button>
				</div>
			</div>
		</section>
	);
};

export default ThirdContainer;
