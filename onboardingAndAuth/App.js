import "./global.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./app/navigation/MainNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
});
