import React, {useState, Fragment} from "react";
import {Loader} from "../../components";
import toast from "react-hot-toast";
import {useStateContext} from "../../context/ContextProvider";
import styles from "./Auth.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {BiArrowBack} from "react-icons/bi";
import {auth} from "../../api/firebase";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

const Signup = () => {
	const {
		isLoading,
		setIsLoading,
		name,
		setName,
		email,
		setEmail,
		phoneNumber,
		setPhoneNumber,
	} = useStateContext();

	const navigate = useNavigate();
	const [password, setPassword] = useState("");

	const signUpwithEmail = (e) => {
		e.preventDefault();

		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// const user = userCredential.user;
				setIsLoading(false);
				toast.success("Sign Up Successful!!");
				navigate("/login");
			})
			.catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
				toast.error("Sign Up Unsuccessful");
				setIsLoading(false);
				setEmail("");
				setPassword("");
				setPassword("");
			});
	};

	const provider = new GoogleAuthProvider();
	const signInWithGoogle = () => {
		setIsLoading(true);

		signInWithPopup(auth, provider)
			.then((result) => {
				// const user = result.user;
				setIsLoading(false);
				toast.success("Login Successful!!");
				navigate("/home");
			})
			.catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
				toast.error("Login Failed");
				setIsLoading(false);
				setEmail("");
				setPassword("");
			});
	};

	return (
		<Fragment>
			{isLoading && <Loader />}
			<form onSubmit={(e) => signUpwithEmail(e)} className={styles.container}>
				<h1>Sign Up</h1>
				<div className={styles["container-one"]}>
					<label>Full Name</label>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>

					<label>Email Address</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>

					<label>Phone Number</label>
					<input
						type='number'
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>

					<label>Password</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

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
				<Link to='/onboarding-three' className={styles.icon}>
					<BiArrowBack />
				</Link>
			</form>

			<div className={styles["container-three"]}>
				<button type='button' onClick={signInWithGoogle}>
					<FcGoogle />
					Continue with Google
				</button>
				<p>
					Already have an Account? {"  "}
					<Link to='/login'>Login</Link>
				</p>
			</div>
		</Fragment>
	);
};

export default Signup;
