import React, {useContext, createContext, useState} from "react";
// import axios from "axios";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [modal, setModal] = useState(false);
	const [config, setConfig] = useState({});
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const locations = [
		{
			name: "Ikeja",
			text: "Ikeja City Mall, Alausa Rd, Lagos, Nigeria",
			lat: 6.6144,
			lng: 3.3581,
		},
		{
			name: "Bode Thomas",
			text: "Bode Thomas Street, Surulere, Lagos, Nigeria",
			lat: 6.488739,
			lng: 3.348708,
		},
		{
			name: "Lekki",
			text: "Lekki Epe Exp Way, Lekki, Lagos, Nigeria",
			lat: 6.4698,
			lng: 3.5852,
		},
		{
			name: "Yaba",
			text: "Yaba College of Technology, Abule Ijesha, Lagos",
			lat: 6.5095,
			lng: 3.3711,
		},
	];

	return (
		<div>
			<StateContext.Provider
				value={{
					isLoading,
					setIsLoading,
					locations,
					modal,
					setModal,
					name,
					setEmail,
					setName,
					email,
					phoneNumber,
					setPhoneNumber,
					config,
					setConfig,
				}}>
				{children}
			</StateContext.Provider>
		</div>
	);
};

export const useStateContext = () => useContext(StateContext);
