/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Popup from "../../design/popup/Popup";
import Cart from "./Cart";

const Header = () => {
	// when click on hamburger menu
	const hamburgerOpen = () => {
		const navLinks = document.querySelector(".nav-links");
		const links = document.querySelectorAll(".nav-links li");
		// open navbar
		navLinks.classList.toggle("open");
		// for make the show of links is good
		let i = 2;
		links.forEach((link) => {
			link.style.transition = `all 0.5s ease 0.${i}s`;
			link.classList.toggle("fade");
			i = i + 2;
		});
	};

	return (
		<nav>
			<div onClick={hamburgerOpen} className="hamburger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>

			<ul className="logo">
				<li>
					<a href="#">Monster Eat</a>
				</li>
			</ul>
			<ul className="nav-links">
				<Cart />
				<li>
					<a href="#">Login</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
