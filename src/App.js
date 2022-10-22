import {Route, Routes} from "react-router-dom";
import {Splash, OnBoarding1, OnBoarding2, OnBoarding3, Signup} from "./pages";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Splash />} />
			<Route path='/onboarding-one' element={<OnBoarding1 />} />
			<Route path='/onboarding-two' element={<OnBoarding2 />} />
			<Route path='/onboarding-three' element={<OnBoarding3 />} />
			<Route path='/sign-up' element={<Signup />} />
		</Routes>
	);
}

export default App;
