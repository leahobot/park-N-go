import React, {useState, useEffect} from "react";
import {useFlutterwave, closePaymentModal} from "flutterwave-react-v3";
import {Link, useNavigate} from "react-router-dom";
import carPark from "../../assets/carPark.png";
import logo from "../../logo.svg";
import styles from "./Common.module.scss";
import {flutterwave_api_key} from "../../config";
import {BiArrowBack} from "react-icons/bi";
import {MdLocationPin} from "react-icons/md";
import {RiArrowDownSLine} from "react-icons/ri";
import {BsArrowRight} from "react-icons/bs";
import {useStateContext} from "../../context/ContextProvider";

const Bookings = () => {
	const [userLocation, setUserLocation] = useState({});
	const {name, email, phoneNumber} = useStateContext();
	const [details, setDetails] = useState({});
	const navigate = useNavigate();

	if ((name, email, phoneNumber)) {
		setDetails({
			name: name,
			email: email,
			phoneNumber: phoneNumber,
		});
	}

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("userLocation"));
		if (user) {
			return setUserLocation(user);
		} else {
			return null;
		}
	}, []);

	const config = {
		public_key: flutterwave_api_key,
		tx_ref: Date.now(),
		amount: 200,
		currency: "NGN",
		payment_options: "card,mobilemoney,ussd",
		customer: {
			email: details.email,
			phone_number: details.phoneNumber,
			name: details.name,
		},
		customizations: {
			title: "Park 'N' Go",
			description: "Payment for Car Park",
			logo: logo,
		},
	};

	const handleFlutterPayment = useFlutterwave(config);

	return (
		<div className={styles.main}>
			<div className={styles.img}>
				<img src={carPark} alt='car-park' />
				<Link to='/home'>
					<BiArrowBack className={styles.arrow} />
				</Link>
			</div>
			<div className={styles["main-body"]}>
				<h3>{userLocation.name}</h3>
				<span>
					<MdLocationPin size={25} color='#5072BF' />
					<p style={{color: "#828282"}}>{userLocation.text}</p>
				</span>
				<p style={{fontSize: "1.8rem", fontWeight: "500"}}>Parking Duration:</p>
				<div className={styles["main-body-container"]}>
					<div className={styles["main-body-container-box"]}>
						<div>
							<p style={{fontWeight: "600"}}>8:00 AM</p>
							<small>Today</small>
						</div>
						<RiArrowDownSLine size={25} />
					</div>
					<BsArrowRight size={25} color='#5072BF' />
					<div className={styles["main-body-container-box"]}>
						<div>
							<p style={{fontWeight: "600"}}>12:00 PM</p>
							<small>29 Oct 2022</small>
						</div>
						<RiArrowDownSLine size={25} />
					</div>
				</div>
				<div>
					<p
						style={{
							fontSize: "1.8rem",
							fontWeight: "500",
							marginBottom: "0.5rem",
						}}>
						Parking Info:
					</p>
					<p>
						24/7 parking facility facility with cctv camera, professional
						security guard, chair for disable, floor parking lift facilities
						with 35% cashback on first parking...Read More
					</p>
				</div>
				<div className={styles.book}>
					<h4 style={{color: "#5072BF"}}>₦200/hr</h4>
					<button
						className={styles.button}
						onClick={() => {
							handleFlutterPayment({
								callback: (response) => {
									console.log(response);
									closePaymentModal(); // this will close the modal programmatically
									navigate("/confirmation");
								},
								onClose: () => {},
							});
						}}>
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Bookings;
