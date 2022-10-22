import React from "react";
import {Link} from "react-router-dom";
import styles from "./OnBoarding.module.scss";

const OnBoarding1 = () => {
	return (
		<div className={`${styles.container} ${styles.bg1}`}>
			<main style={{backgroundColor: "rgba($color: #000000, $alpha: 0.6)"}}>
				<h1>Avoid Parking Chaos</h1>
				<p>
					No great City has ever been known for it”s abundant supply of parking.
				</p>
				<p className={styles.name}>Allan Jacobs</p>
				<div className={styles["span-container"]}>
					<span
						style={{backgroundColor: "white"}}
						className={styles.span1}></span>
					<span className={styles.span1}></span>
					<span className={styles.span1}></span>
				</div>
			</main>
			<div className={styles["container-two"]}>
				<Link to='/sign-up'>
					<p>Skip</p>
				</Link>
				<Link to='/onboarding-two'>
					<button type='button'>Next</button>
				</Link>
			</div>
		</div>
	);
};

export default OnBoarding1;
