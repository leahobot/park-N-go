import React from "react";
import styles from "./Auth.module.scss";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

const Reset = () => {
	const handleReset = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={(e) => handleReset(e)} className={styles.container}>
			<h1>Reset Password</h1>
			<p className={styles["container-text"]}>
				Please enter your email address to request a password reset.
			</p>
			<div className={styles["container-one"]}>
				<label>Email Address</label>
				<input type='email' className={styles.input} required />
			</div>
			<div className={styles["container-five"]}>
				<button type='submit' className={styles["container-five-btn"]}>
					Send Reset Link
				</button>
				<Link to='/login'>Cancel</Link>
			</div>
			<Link to='/login' className={styles.icon}>
				<BiArrowBack />
			</Link>
		</form>
	);
};

export default Reset;
