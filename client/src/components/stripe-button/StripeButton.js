import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../stripe-checkout-form/StripeCheckout";

const PUBLIC_KEY = "pk_test_51KksksENpvpK9J8psPLe7fxjiNMjwNLM7GxWowCDdDm1XTaFSs8LKrK1Fef5nFLKOa8SSMVsRJ6a1kQXt7HrAsse00qgExWD6S"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeButton() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}