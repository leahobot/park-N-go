import {Route, Routes} from "react-router-dom";
import {
	Splash,
	OnBoarding1,
	OnBoarding2,
	OnBoarding3,
	Signup,
	Login,
	OTP,
	Reset,
	TermsAndCondition,
	NotFound,
} from "./pages";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Splash />} />
			<Route path='/onboarding-one' element={<OnBoarding1 />} />
			<Route path='/onboarding-two' element={<OnBoarding2 />} />
			<Route path='/onboarding-three' element={<OnBoarding3 />} />
			<Route path='/sign-up' element={<Signup />} />
			<Route path='/login' element={<Login />} />
			<Route path='/reset' element={<Reset />} />
			<Route path='/terms-and-condition' element={<TermsAndCondition />} />
			<Route path='/otp' element={<OTP />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
