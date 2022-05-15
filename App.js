import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

// screen
import Stacknavigation from "./src/navigation/Stacknavigation";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView />
      <Stacknavigation />
    </>
  );
}
