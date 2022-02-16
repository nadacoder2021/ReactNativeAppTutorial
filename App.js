import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontFamily: "sans-serif",
          fontSize: "40px",
          textAlign: "center",
        }}
        numberOfLines={2}
      >
        {" "}
        Asalamu alaikum Huzaifah
      </Text>

      <TouchableHighlight
        onPress={() => {
          console.log("Image touched");
        }}
      >
        <Image
          style={{
            resizeMode: "cover",
            height: 200,
            width: 300,
            borderRadius: 75,
          }}
          source={require("./assets/huzaifah.jpg")}
          // source={{
          //
          //   uri: "https://thequranclasses.online/wp-content/uploads/2020/12/Learn-Quran-for-Kids-The-Quran-Classes.png",
          // }}
        />
      </TouchableHighlight>
      <Button
        title="Log in"
        onPress={() =>
          Alert.prompt("Mom says:", "You've done it", (text) =>
            console.log(text)
          )
        }
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef233c",
    alignItems: "center",
    justifyContent: "center",
  },
});

// react native does not have div, html element, paragraph, have to
//building blocks used by react native.
