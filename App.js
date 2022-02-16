import { StatusBar } from "expo-status-bar";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import huzaifah from "./assets/huzaifah.jpg";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
} from "react-native";

export default function App() {
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#F8F8F8",
          flex: 1,
          flexDirection: "row",
          width: 400,
          height: 200,
        }}
      />

      <View
        style={{
          backgroundColor: "#373A4E",
          flexDirection: "row",
          flex: 1,
          width: 400,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "#FFBD00",
          flex: 1,
          width: 400,
          flexDirection: "row",
          height: 100,
        }}
      />
      <Text
        numberOfLines={1}
      >
        Huzaifah how are you?
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
            width: 200,
            justifyContent: "center",
            borderRadius: 95,
          }}
          source={huzaifah}
        />
      </TouchableHighlight>
      <Button
        color="blue"
        title="Log in"
        onPress={() =>
          Alert.alert("Mom says:", "You've done it", (text) =>
            console.log(text)
          )
        }
      />

      {/* <Image
        source={{
          width: 10,
          height: 10,
          uri: "https://thequranclasses.online/wp-content/uploads/2020/12/Learn-Quran-for-Kids-The-Quran-Classes.png",
        }}
      /> */}

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1faee",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
});

// react native does not have div, html element, paragraph, have to
//building blocks used by react native.
