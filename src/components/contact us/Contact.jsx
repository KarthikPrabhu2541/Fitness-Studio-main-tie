import React from "react";
import "./Contact.css";
import contact from "../../assets/contact-us-banner.jpeg";
import mail from "../../assets/mail.jpeg";
import call from "../../assets/white_phone_icon2.png";
import location from "../../assets/location-image.jpg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
	return (
		<div className="contact-container">
			<img src={contact} alt="contact"/>
			<div className="contact-content">
				<div className="contact-item">
					<img src={mail} alt="mail"/>
					<p>abhilasha15597@gmail.com</p>
					or
					<p>fitness@gmail.com</p>
				</div>
				<div className="contact-item">
					<img src={call} alt="call"/>
					<p>9795149184</p>
					or
					<p>7380872046</p>
				</div>
				<div className="contact-item">
					<img src={location} alt="location"/>
					<p>
						647 Linda Street, Phoenixvilla
						<br />
						121002, India
					</p>
				</div>
			</div>
			<div className="contactUs">
				<div className="contact-via-social">
					<h1>Our Contact</h1>
					<h2>
						<span> Get in touch with us</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores
						deleniti, voluptatibus optio ratione facere suscipit dolore quo
						iusto.
					</p>
					<div className="social">
						<a href="ww.facebook.com">
							<FaFacebook />
						</a>
						<a href="www.twitter.com">
							<FaTwitter />
						</a>
						<a href="https://www.youtube.com">
							<FaYoutube />
						</a>
					</div>
				</div>

				<div className="contact-via-form">
					<form
						action="https://getform.io/f/1ec2fd53-934c-494c-ac46-7e838cbd9f27"
						method="POST"
					>
						<input
							placeholder="First Name"
							type="text"
							name="name"
						/>
						<input
							placeholder="Last Name"
							type="text"
							name="name"
						/>
						<input
							placeholder="Email"
							type="email"
							name="email"
						/>
						<textarea
							placeholder="Message"
							type="text"
						/>
						<button>Send Message</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
