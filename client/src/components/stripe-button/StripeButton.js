import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import CustomButtonComponent from "../custom-button/CustomButtonComponent";


export default function StripeButton({cartItems}) {
	// const user = useSelector(selectCurrentUser)
	// console.log(cartItems)

	const handleCheckout = () => {
		axios.post("http://localhost:5000/create-checkout-session", {
			cartItems,
		}).then((res) => {
			if (res.data.url) {
				window.location.href = res.data.url
			}
		}).catch((err) => console.log(err.message))
	}
	return (
		<CustomButtonComponent onClick={() => handleCheckout()}>Check Out</CustomButtonComponent>
	)
}