import React from "react";
import {Link} from "react-router-dom";
import styles from "./Splash.module.scss";
import logo from "../../logo.svg";

const Splash = () => {
	return (
		<div>
			<Link to='/onboarding-one' className={styles.main}>
				<img src={logo} alt='brand_logo' />
				<h2>Park 'N' Go</h2>
				<p>Parking Finder App</p>
			</Link>
		</div>
	);
};

export default Splash;
