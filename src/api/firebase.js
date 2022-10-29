import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {apiKey, appId} from "../config";

export const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "parkngo-d3685.firebaseapp.com",
	projectId: "parkngo-d3685",
	storageBucket: "parkngo-d3685.appspot.com",
	messagingSenderId: "880730580837",
	appId: appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
