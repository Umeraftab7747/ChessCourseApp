import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();
import { useEffect } from "react";
// screens
import Dashboard from "../screens/Dashboard";
import ChatSupport from "../screens/ChatSupport";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import { auth, db } from "../Database/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../store/authSlice";
import { setChat, setBuyBooks } from "../store/projectSlice";
export function MyTabs() {
	const dispatch = useDispatch();
	const getUnique = (array) => {
		let uniqueArray = [];
		array.filter((element) => {
			const isDuplicate = uniqueArray.find((item) => item.id === element.id);

			if (!isDuplicate) {
				uniqueArray.push(element);
			}
		});

		return uniqueArray;
	};
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				const uid = user.uid;
				db.collection("confirmOrder")
					// .where("userid", uid)
					.onSnapshot(async (snapshot) => {
						let newbooks = [];
						await snapshot.docs.map((doc) => ({
							newbooks: newbooks.push(...doc.data().books),
						}));
						const rendring = await getUnique(newbooks);
						dispatch(
							setBuyBooks({
								buybooks: rendring,
							})
						);
					});
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
				dispatch(setAuth({ auth: null }));
			}
		});
	}, []);

	return (
		<Tab.Navigator
			initialRouteName='Feed'
			activeColor='#e91e'
			barStyle={{ backgroundColor: "#fff" }}>
			<Tab.Screen
				name='Dashboard'
				component={Dashboard}
				options={{
					tabBarLabel: "Übersicht",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='home' color={color} size={26} />
					),
				}}
			/>

			<Tab.Screen
				name='ChatSupport'
				component={ChatSupport}
				options={{
					tabBarLabel: "Chat",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='chat' color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name='Cart'
				component={Cart}
				options={{
					tabBarLabel: "Warenkorb",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='cart' color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarLabel: "Profil",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='account' color={color} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default MyTabs;
