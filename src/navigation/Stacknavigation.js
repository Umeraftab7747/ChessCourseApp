import * as React from "react";
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

const Stack = createNativeStackNavigator();

function Stacknavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stacknavigation;
