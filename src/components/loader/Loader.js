import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "./Loader.module.scss";

const Loader = () => {
	const [domReady, setDomReady] = useState(false);

	useEffect(() => {
		setDomReady(true);
	}, []);

	return domReady
		? ReactDOM.createPortal(
				<div className={styles.container}>
					<div className={styles["lds-spinner"]}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>,
				document.getElementById("loader"),
		  )
		: null;
};

export default Loader;
