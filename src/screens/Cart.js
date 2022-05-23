import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
	Alert,
} from "react-native";
import {
	useStripe,
	confirmPaymentSheetPayment,
} from "@stripe/stripe-react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { w, h } from "react-native-responsiveness";
import { black, Yellow } from "../utils/color";

// components
import AppCartItem from "../components/AppCartItem";
import Appbutton from "../components/Appbutton";
import { useSelector } from "react-redux";

const Cart = ({ navigation }) => {
	const { cart, books } = useSelector((state) => state.project);
	const [totalPrice, settotalPrice] = useState(0);
	const stripe = useStripe();
	const buy = () => {
		navigation.navigate("PaymentMethod");
	};
	// const buy = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			`https://strip-checking.herokuapp.com/create-payment-intent`,
	// 			{
	// 				method: "POST",
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 				},
	// 				body: JSON.stringify({
	// 					amount: "12",
	// 				}),
	// 			}
	// 		);

	// 		const data = await response.json();
	// 		if (!response.ok) {
	// 			return alert(data.message);
	// 		}
	// 		const initSheet = await stripe.initPaymentSheet({
	// 			paymentIntentClientSecret: data.clientSecret,
	// 			merchantDisplayName: "Bitcoin Buy",
	// 		});
	// 		if (initSheet.error) {
	// 			// console.error(initSheet.error);
	// 			return alert(initSheet.error.message);
	// 		}
	// 		const presentSheet = await stripe.presentPaymentSheet({
	// 			clientSecret: data.clientSecret,
	// 		});
	// 		if (presentSheet.error) {
	// 			// console.error(presentSheet.error);
	// 			return alert(presentSheet.error.message);
	// 		}

	// 		alert("Payment successfully! Thank you for the purchase.");
	// 		// Update Bitcoin balance & total value
	// 		// Reset quantity
	// 	} catch (err) {
	// 		// console.error(err);
	// 		alert("Payment failed!", err.message);
	// 	}
	// };
	useEffect(() => {
		// setInterval(() => {
		if (books.length > 0 && cart.length > 0) {
			let newtotal = 0;
			cart.map((dat, index) => {
				let datas = books.find((itm) => itm.id === dat.id);
				if (datas) {
					newtotal = newtotal + datas.price;
					console.log(index);
				}
				settotalPrice(newtotal);
			});
		}
		// }, 5000);
	}, [cart]);

	useLayoutEffect(() => {
		if (books.length > 0 && cart.length > 0) {
			let newtotal = 0;
			cart.map((dat, index) => {
				let datas = books.find((itm) => itm.id === dat.id);
				if (datas) {
					newtotal = newtotal + datas.price;
					console.log(index);
				}
				settotalPrice(newtotal);
			});
		}
	}, []);
	return (
		<View style={styles.MainCart}>
			{/* header */}
			<View style={styles.MainContainer}>
				<View style={styles.leftcontainer}>
					<Image
						style={styles.cartImg}
						source={require("../../assets/main/cart.png")}
					/>
				</View>
				<View style={styles.Rightcontainer}>
					<Text style={styles.cartText}>Cart</Text>
				</View>
			</View>
			{/* header */}
			<FlatList
				data={cart}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => {
					const newdata = books && books.find((itm) => itm.id === item.id);
					return (
						<AppCartItem
							imglink={newdata.imglink}
							name={newdata.name}
							price={"€" + newdata.price}
						/>
					);
				}}
			/>

			{/* line */}
			<View style={styles.line} />
			<View style={styles.NetTotal}>
				<Text style={styles.TotalCart}>Total</Text>
				<Text style={styles.TotalCart2}>€{totalPrice}</Text>
			</View>
			<Text style={styles.paymentEtc}>
				The total amount is for one payment. No subscription!
			</Text>
			<Appbutton name={"Checkout"} onPress={buy} />
		</View>
	);
};

const styles = StyleSheet.create({
	MainCart: {
		width: "100%",
		height: "100%",
		backgroundColor: "#fff",
	},
	MainContainer: {
		width: "100%",
		height: h("10%"),
		// backgroundColor: "red",
		marginTop: h("5%"),
		flexDirection: "row",
	},
	leftcontainer: {
		width: "20%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor: "gold",
	},
	Rightcontainer: {
		width: "50%",
		height: "100%",
		justifyContent: "center",
	},
	cartImg: {
		width: "50%",
		height: "50%",
		resizeMode: "contain",
	},
	cartText: {
		color: black,
		fontSize: h("2.8%"),
		fontWeight: "bold",
	},
	line: {
		backgroundColor: "#0003",
		width: "80%",
		alignSelf: "center",
		height: h("0.2%"),
		borderRadius: h("100%"),
	},
	NetTotal: {
		width: "80%",
		height: "10%",
		// backgroundColor: "red",
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	TotalCart: {
		color: black,
		fontSize: h("2.2%"),
		fontWeight: "bold",
	},
	TotalCart2: {
		color: Yellow,
		fontSize: h("2.2%"),
		fontWeight: "bold",
	},
	paymentEtc: {
		color: "#0003",
		fontSize: h("1.8%"),
		alignSelf: "center",
	},
});

export default Cart;
