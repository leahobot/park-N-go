import React from "react";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import styles from "./OnBoarding.module.scss";

const OnBoarding3 = () => {
	return (
		<div className={`${styles.container} ${styles.bg3}`}>
			<main>
				<h1>Secure a Parking Space</h1>
				<p>
					Search and pick your specific location and find parking spaces on the
					go.
				</p>
				<p className={styles.name}>SECURE NOW OR IZZ GONE!</p>
				<div className={styles["span-container"]}>
					<span className={styles.span1}></span>
					<span className={styles.span1}></span>
					<span
						className={styles.span1}
						style={{backgroundColor: "white"}}></span>
				</div>
			</main>
			<div className={styles["container-three"]}>
				<Link to='/sign-up'>
					<button type='button'>Sign Up</button>
				</Link>
				<Link to='/home'>
					<button type='button' id={styles.btn}>
						Try App
					</button>
				</Link>
			</div>
			<Link to='/onboarding-two' className={styles.icon}>
				<BiArrowBack />
			</Link>
		</div>
	);
};

export default OnBoarding3;
