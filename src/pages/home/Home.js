import React, {useState} from "react";
import {Route, Routes, NavLink, Link} from "react-router-dom";
import {Bookings, Account, ListSpace, MapContainer} from "../../components";
import styles from "./Home.module.scss";
import {MdLocationPin} from "react-icons/md";
import {RiCalendarTodoFill} from "react-icons/ri";
import {FaListAlt, FaUserAlt} from "react-icons/fa";
import {SlLocationPin} from "react-icons/sl";
import {BsBellFill} from "react-icons/bs";
import {useStateContext} from "../../context/ContextProvider";

const Home = () => {
	const {locations, modal, setModal} = useStateContext();
	const [userLocation, setUserLocation] = useState({});
	const [dispalyOptions, setDispalyOptions] = useState(false);
	const activeStyle = ({isActive}) => (isActive ? "active" : "");

	const handleLocation = (obj) => {
		setDispalyOptions(false);
		setModal(true);
		setUserLocation(obj);

		localStorage.setItem("userLocation", JSON.stringify(obj));
	};

	return (
		<section className={styles.home}>
			<header>
				<div
					className={styles.input}
					onClick={() => setDispalyOptions((previous) => !previous)}>
					<MdLocationPin className={styles.icon} color='#A6A6A6' />
					<input
						type='text'
						placeholder='Choose location'
						value={userLocation.name}
					/>
				</div>
				<BsBellFill
					className={styles.icon}
					color='white'
					style={{marginBottom: "1rem"}}
				/>
				{dispalyOptions && (
					<div className={styles.options}>
						{locations.map((location, index) => {
							return (
								<div
									key={index}
									className={styles["options-box"]}
									onClick={() =>
										handleLocation({name: location.name, text: location.text})
									}>
									<MdLocationPin size={30} color='#5072BF' />
									<div>
										<h4>{location.name}</h4>
										<p className={styles["options-box-text"]}>
											{location.text}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				)}
				{modal && (
					<div className={styles.modal}>
						<div className={styles["modal-box"]}>
							<div>
								<h3>{userLocation.name}</h3>
								<span className={styles["modal-box-text"]}>
									<SlLocationPin size={18} />
									<p>{userLocation.text}</p>
								</span>
							</div>
							<span className={styles["modal-box-span"]}>₦200/hr</span>
						</div>
						<Link
							to='bookings'
							className={styles["modal-btn"]}
							onClick={() => setModal(false)}>
							Book Now
						</Link>
					</div>
				)}
			</header>
			<main>
				<Routes>
					<Route index element={<MapContainer />} />
					<Route path='bookings' element={<Bookings />} />
					<Route path='account' element={<Account />} />
					<Route path='list-space' element={<ListSpace />} />
				</Routes>
			</main>
			<footer>
				<NavLink to='/home' end className={activeStyle}>
					<MdLocationPin size={30} />
					<p>Find Car Park</p>
				</NavLink>
				<NavLink to='bookings' className={activeStyle}>
					<RiCalendarTodoFill size={30} />
					<p>Bookings</p>
				</NavLink>
				<NavLink to='list-space' className={activeStyle}>
					<FaListAlt size={30} />
					<p>List Space</p>
				</NavLink>
				<NavLink to='account' className={activeStyle}>
					<FaUserAlt size={30} />
					<p>Account</p>
				</NavLink>
			</footer>
		</section>
	);
};

export default Home;
