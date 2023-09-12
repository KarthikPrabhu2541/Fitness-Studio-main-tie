import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gallery } from "../ClientGallery";
import "../home.css";

const FifthContainer = () => {
	return (
		<section id="home_fifth_container">
			<h1>Clients Gallery</h1>
			<div className="gallery">
				{gallery.map((image) => (
					<img
						src={image.image}
						alt="gallery"
					/>
				))}
			</div>
		</section>
	);
};

export default FifthContainer;
