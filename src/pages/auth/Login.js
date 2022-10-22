import React from "react";
import styles from "./Auth.module.scss";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

const Login = () => {
	const handleLogin = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={(e) => handleLogin(e)} className={styles.container}>
			<h1>Login</h1>
			<div className={styles["container-one"]}>
				<label>Email Address</label>
				<input type='email' className={styles.input} required />
				<label>Password</label>
				<input type='password' className={styles.input} required />

				<span className={styles["container-one-span"]}>
					<input type='checkbox' />
					<p className={styles.terms}>Remember Login</p>
					<Link to='/reset' className={styles.forgot}>
						Forgot Password?
					</Link>
				</span>
				<button type='submit'>Login</button>
			</div>

			<div className={styles["container-three"]}>
				<p className={styles.user}>
					New User? {"  "}
					<Link to='/sign-up'>Sign Up</Link>
				</p>
			</div>
			<Link to='/sign-up' className={styles.icon}>
				<BiArrowBack />
			</Link>
		</form>
	);
};

export default Login;
