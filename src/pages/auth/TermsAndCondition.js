import React from "react";
import styles from "./Auth.module.scss";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

const TermsAndCondition = () => {
	return (
		<main className={styles.container}>
			<h1>Terms of Use</h1>
			<div className={styles["container-content"]}>
				<p>
					You may use our Services only if you can legally form a binding
					contract with us, and only in accordance with these terms and all
					applicable laws. You can't use our Services if it would be prohibited
					by Nigerian sanctions. Any use or access by anyone under the age of 13
					is not allowed. Using Park 'N' Go may include downloading software to
					your phone, tablet, or other device. You agree that we may
					automatically update that software, and these terms will apply to any
					updates. We are a technology company. We do not own, operate, or
					maintain any parking facility, and we do not provide parking
					enforcement.
				</p>
			</div>
			<div className={styles["container-four"]}>
				<Link to='/onboarding-three' className={styles["container-four-1"]}>
					Cancel
				</Link>
				<Link to='/sign-up' className={styles["container-four-2"]}>
					Accept All
				</Link>
			</div>
			<Link to='/sign-up' className={styles.icon}>
				<BiArrowBack />
			</Link>
		</main>
	);
};

export default TermsAndCondition;
