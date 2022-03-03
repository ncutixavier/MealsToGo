import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Text>Test App</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>Test App</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchBar: {
    backgroundColor: "green",
    padding: 10,
  },
  listContainer: {
    backgroundColor: "blue",
    flex: 1,
    padding: 10,
  }
});
