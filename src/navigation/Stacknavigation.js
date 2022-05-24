import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Forget from "../screens/Forget";
import Dashboard from "../screens/Dashboard";
import ProductDetail from "../screens/ProductDetail";

// navigation
import MyTabs from "./BottomNavigation";
import { auth, db } from "../Database/firebaseConfig";
import { setBooks, setChat } from "../store/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../store/authSlice";
import PaymentMethod from "../screens/PaymentMethod";
const Stack = createNativeStackNavigator();

function Stacknavigation() {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.auth);
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				const uid = user.uid;

				db.collection("userinfo")
					.doc(uid)
					.get()
					.then((doc) => {
						dispatch(
							setAuth({
								auth: {
									userid: uid,
									email: doc?.data().email,
									name: doc?.data().name,
								},
							})
						);
					});
				db.collection("chatSupport")
					.doc(uid)
					.onSnapshot((doc) => {
						dispatch(
							setChat({
								mesg: {
									customer: doc?.data().customer,
									email: doc?.data().email,
									admin: doc?.data().admin,
									messages: doc?.data().messages,
								},
							})
						);
					});
			} else {
				dispatch(setAuth({ auth: { email: "", name: "", userid: "" } }));
			}
		});
		db.collection("books").onSnapshot((snapshot) => {
			dispatch(
				setBooks({
					books: snapshot.docs.map((doc) => ({
						id: doc.id,
						name: doc.data().name,
						description: doc.data().description,
						imglink: doc.data().imglink,
						price: doc.data().price,
					})),
				})
			);
		});
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Splash' component={Splash} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Signup' component={Signup} />
				<Stack.Screen name='Forget' component={Forget} />
				<Stack.Screen
					name='ProductDetail'
					component={ProductDetail}
					initialParams={{ itemid: "" }}
				/>
				<Stack.Screen name='MyTabs' component={MyTabs} />
				<Stack.Screen name='PaymentMethod' component={PaymentMethod} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Stacknavigation;
