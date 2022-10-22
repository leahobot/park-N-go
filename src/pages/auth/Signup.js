import React from "react";
import styles from "./Auth.module.scss";
import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {BiArrowBack} from "react-icons/bi";

const Signup = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className={styles.container}>
			<h1>Sign Up</h1>
			<div className={styles["container-one"]}>
				<label>Full Name</label>
				<input type='text' className={styles.input} required />
				<label>Email Address</label>
				<input type='email' className={styles.input} required />
				<label>Phone Number</label>
				<input type='number' className={styles.input} />
				<label>Password</label>
				<input type='password' className={styles.input} required />

				<span className={styles["container-one-span"]}>
					<input type='checkbox' required />
					<p className={styles.terms}>
						I agree with the{" "}
						<Link to='/terms-and-condition'>Terms and Conditions</Link>
					</p>
				</span>
				<button type='submit'>Continue</button>
			</div>
			<div className={styles["container-two"]}>
				<span></span>
				<p>or</p>
				<span></span>
			</div>
			<div className={styles["container-three"]}>
				<button>
					<FcGoogle />
					Continue with Google
				</button>
				<p>
					Already have an Account? {"  "}
					<Link to='/login'>Login</Link>
				</p>
			</div>
			<Link to='/onboarding-three' className={styles.icon}>
				<BiArrowBack />
			</Link>
		</form>
	);
};

export default Signup;
