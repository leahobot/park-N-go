import React, {useState, Fragment} from "react";
import styles from "./Auth.module.scss";
import {toast} from "react-hot-toast";
import {Loader} from "../../components";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import {sendPasswordResetEmail} from "firebase/auth";
import {auth} from "../../api/firebase";
import {useStateContext} from "../../context/ContextProvider";

const Reset = () => {
	const {setIsLoading, isLoading} = useStateContext();
	const [email, setEmail] = useState("");

	const handleReset = (e) => {
		e.preventDefault();

		setIsLoading(true);
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setIsLoading(false);
				toast.success("Check email for password reset");
				setEmail("");
			})
			.catch((error) => {
				setIsLoading(false);
				toast.error("Email not Found in our database");
			});
	};

	return (
		<Fragment>
			{isLoading && <Loader />}
			<form onSubmit={(e) => handleReset(e)} className={styles.container}>
				<h1>Reset Password</h1>
				<p className={styles["container-text"]}>
					Please enter your email address to request a password reset.
				</p>
				<div className={styles["container-one"]}>
					<label>Email Address</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
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
		</Fragment>
	);
};

export default Reset;
