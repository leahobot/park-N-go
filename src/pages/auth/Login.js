import React, {useState, Fragment} from "react";
import styles from "./Auth.module.scss";
import {Loader} from "../../components";
import {Link, useNavigate} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import {useStateContext} from "../../context/ContextProvider";
import {auth} from "../../api/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
	const navigate = useNavigate();
	const {isLoading, setIsLoading} = useStateContext();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();

		setIsLoading(true);

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// const user = userCredential.user;
				setIsLoading(false);
				toast.success("Login Successful!");
				navigate("/home");
			})
			.catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
				setIsLoading(false);
				toast.error("Login Failed");
				setEmail("");
				setPassword("");
			});
	};

	return (
		<Fragment>
			{isLoading && <Loader />}
			<form onSubmit={(e) => handleLogin(e)} className={styles.container}>
				<h1>Login</h1>
				<div className={styles["container-one"]}>
					<label>Email Address</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label>Password</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

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
		</Fragment>
	);
};

export default Login;
