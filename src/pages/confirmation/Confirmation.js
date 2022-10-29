import React from "react";
import {Link} from "react-router-dom";
import confirm from "../../assets/confirm.png";
import styles from "./Confirmation.module.scss";

const Confirmation = () => {
	return (
		<div className={styles.main}>
			<div>
				<img src={confirm} alt='confirmation' />
			</div>
			<div>
				<h1>Thank you for your Reservation!</h1>
				<p style={{marginTop: "1rem"}}>Your booking has been confirmed.</p>
			</div>
			<Link to='/home'>Return Home</Link>
		</div>
	);
};

export default Confirmation;
