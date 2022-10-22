import React from "react";
import styles from "./OnBoarding1.module.scss";

const OnBoarding1 = () => {
	return (
		<div className={styles.container}>
			<main>
				<h1>Avoid Parking Chaos</h1>
				<p>
					No great City has ever been known for it”s abundant supply of parking.
				</p>
				<p className={styles.name}>Allan Jacobs</p>
				<div className={styles["span-container"]}>
					<span className={styles.span1}></span>
					<span className={styles.span1}></span>
					<span className={styles.span1}></span>
				</div>
			</main>
		</div>
	);
};

export default OnBoarding1;
