import React from "react";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import styles from "./OnBoarding.module.scss";

const OnBoarding2 = () => {
	return (
		<div className={`${styles.container} ${styles.bg2}`}>
			<main>
				<h1>Input your destination</h1>
				<p>Let Park 'N' Go help you find the best parking spot in your area.</p>
				<div className={styles["span-container"]}>
					<span className={styles.span1}></span>
					<span
						className={styles.span1}
						style={{backgroundColor: "white"}}></span>
					<span className={styles.span1}></span>
				</div>
			</main>
			<div className={styles["container-two"]}>
				<Link to='/sign-up'>
					<p>Skip</p>
				</Link>
				<Link to='/onboarding-three'>
					<button type='button'>Next</button>
				</Link>
			</div>
			<Link to='/onboarding-one' className={styles.icon}>
				<BiArrowBack />
			</Link>
		</div>
	);
};

export default OnBoarding2;
