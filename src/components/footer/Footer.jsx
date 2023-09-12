import React from "react";
import "./Footer.css";
import logo from "../../assets/OIP2.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<div className="footer_container">
				<div className="about">
					<img src={logo}  alt="logo"/>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

					<div className="social">
						<a href="https://www.facebook.com">
							<FaFacebook />
						</a>
						<a href="https://www.twitter.com">
							<FaTwitter />
						</a>
						<a href="https://www.youtube.com">
							<FaYoutube />
						</a>
					</div>
				</div>

				<div className="quicklinks">
					<h2>Quick Links</h2>
					<ul>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">FAQ</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Help</a>
						</li>
						<li>
							<a href="#">Terms & Conditions</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
				<div className="contact">
					<h2>Contact Us</h2>
					<ul className="info">
						<li>
							<span></span>
							<span>
								647 Linda Street
								<br />
								Phoenixvilla, 121002,
								<br />
								India
							</span>
						</li>
						<li>
							<span></span>
							<span>
								<a href="tel:+91 1234567890">+91 9756734525</a>
								<br />
								<a href="tel:+91 7894321345">+91 9738621562</a>
							</span>
						</li>
						<li>
							<span></span>
							<span>
								<a href="mailto:Knowmore@gmail.com">Knowmore@gmail.com</a>
							</span>
						</li>
					</ul>
				</div>
				<div className="map">
					<h1>Location</h1>
					<p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.464946629981!2d77.36091877386757!3d28.40522429436961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdcd791431a7f%3A0xe5d6020d9cf2e006!2sPuri%20Pratham%20Society!5e0!3m2!1sen!2sin!4v1692696785387!5m2!1sen!2sin"
							width="300"
							height="150"
							// style="border:0;"
							allowFullScreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</p>
				</div>
			</div>
			<div style={{ textAlign: "center" }}>
				<p>Copyright ©️ Abhilasha Tiwari. All Right Reserved@2023</p>
			</div>
		</footer>
	);
};

export default Footer;
