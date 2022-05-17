import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	LogBox,
	SafeAreaView,
} from "react-native";
import { Provider } from "react-redux";

// screen
import Stacknavigation from "./src/navigation/Stacknavigation";
import { store } from "./src/store";

export default function App() {
	LogBox.ignoreLogs([
		"SerializableStateInvariantMiddleware",
		"A non-serializable value was detected in the state",
		"AsyncStorage has been extracted from",
	]);
	return (
		<Provider store={store}>
			<StatusBar />
			<SafeAreaView />
			<Stacknavigation />
		</Provider>
	);
}
