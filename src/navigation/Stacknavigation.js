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
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";
const Stack = createNativeStackNavigator();

function Stacknavigation() {
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			const uid = user.uid;
			if (uid) {
				db.collection("userinfo")
					.doc(uid)
					.get()
					.then((doc) => {
						dispatch(
							setAuth({
								auth: {
									userid: uid,
									email: doc.data().email,
									name: doc.data().name,
								},
							})
						);
					});
			} else {
				dispatch(setAuth({ auth: null }));
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
		db.collection("chatSupport")
			.orderBy("createdAt", "asc")
			.onSnapshot((snapshot) => {
				dispatch(
					setChat({
						mesg: snapshot.docs.map((doc) => ({
							id: doc.id,
							senderid: doc.data().senderid,
							mesg: doc.data().mesg,
							sendTo: doc.data().sendTo,
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
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Stacknavigation;
