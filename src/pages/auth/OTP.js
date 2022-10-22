import React from "react";
import styles from "./Auth.module.scss";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

const OTP = () => {
	const handleOTP = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={(e) => handleOTP(e)} className={styles.container}>
			<h1>Enter OTP</h1>
			<p className={styles["container-text"]}>
				Please enter the OTP sent to your email or phone number
			</p>
			<div className={styles["container-boxes"]}>
				<input
					type='number'
					className={styles["container-boxes-span"]}
					required
				/>
				<input
					type='number'
					className={styles["container-boxes-span"]}
					required
				/>
				<input
					type='number'
					className={styles["container-boxes-span"]}
					required
				/>
				<input
					type='number'
					className={styles["container-boxes-span"]}
					required
				/>
			</div>
			<div className={styles["container-five"]}>
				<button type='submit' className={styles["container-five-btn"]}>
					Enter
				</button>
			</div>

			<div className={styles["container-three"]}>
				<p className={styles.user}>
					Didn't get a code?
					<Link to='/login'>Resend</Link>
				</p>
			</div>
			<Link to='/login' className={styles.icon}>
				<BiArrowBack />
			</Link>
		</form>
	);
};

export default OTP;
