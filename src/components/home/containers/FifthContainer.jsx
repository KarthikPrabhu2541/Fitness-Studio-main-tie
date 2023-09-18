import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gallery } from "../ClientGallery";
import "../home.css";
const mylist = ['Karthik Prabhu','Lakshmi Narayana','Prajwal Naveen','Keval Krishna'];

const FifthContainer = () => {
	return (
		<section id="home_fifth_container">
			<div className="trainers-info-heading">Trainers Info</div>
			
			<div className="gallery">
				{gallery.map((image) => (
					<div className="image-text-div"><img
						src={image.image}
						alt="gallery"
						className="image-trainers"
					/>
					<div className="text-overlay">
						<div className="image-title">
							Karthik Prabhu
							<p>Age 32</p>
						</div>
						
						<p id="image-desc">Gym</p>
					</div>
					</div>
					
				))}
				
			</div>
		</section>
	);
};

export default FifthContainer;
