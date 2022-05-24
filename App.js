import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	LogBox,
	SafeAreaView,
} from "react-native";
import { Provider } from "react-redux";
import { StripeProvider } from "@stripe/stripe-react-native";

// screen
import Stacknavigation from "./src/navigation/Stacknavigation";
import { store } from "./src/store";

export default function App() {
	LogBox.ignoreLogs([
		"SerializableStateInvariantMiddleware",
		"A non-serializable value was detected in the state",
		"AsyncStorage has been extracted from",
		"new NativeEventEmitter()` was called",
		"Can't perform a React state update on an unmounted component. ",
	]);
	return (
		<StripeProvider publishableKey='pk_test_51KohzCSGXTS5PtLwr6d0UhXOAqtXcJa7qlMZS8F9gEeLUse7SvB3rDufuD87IyTJF52jhnt69xx2bvL2Dyl0LHlT00b8eS3eEB'>
			<Provider store={store}>
				<StatusBar />
				<SafeAreaView />
				<Stacknavigation />
			</Provider>
		</StripeProvider>
	);
}
