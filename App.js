import React from "react";
import { Audio } from "expo-av";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";

const BackgroundColor = {
  1: "#30336B",
  2: "#badc57",
  3: "#F4C724",
  4: "#10A881",
  5: "#2C3335",
  6: "#E74292",
  7: "#BB2CD9",
  8: "#EA7773",
  9: "#1287A5",
  10: "#F5BCBA"
};
const Sound = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav")
};

export default function App() {
  const audio = async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = Sound[number];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch(err => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => audio({ one })}>
        <Text>Sound</Text>
      </TouchableOpacity> */}
      <ScrollView style={styles.grid}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => audio("one")}
            style={[{ backgroundColor: BackgroundColor[1] }, styles.item]}
          >
            <Text style={styles.itemText}>One</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => audio("two")}
            style={[{ backgroundColor: BackgroundColor[2] }, styles.item]}
          >
            <Text style={styles.itemText}>two</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => audio("three")}
            style={[{ backgroundColor: BackgroundColor[3] }, styles.item]}
          >
            <Text style={styles.itemText}>Three</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => audio("four")}
            style={[{ backgroundColor: BackgroundColor[4] }, styles.item]}
          >
            <Text style={styles.itemText}>Four</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => audio("five")}
            style={[{ backgroundColor: BackgroundColor[5] }, styles.item]}
          >
            <Text style={styles.itemText}>Five</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => audio("six")}
            style={[{ backgroundColor: BackgroundColor[6] }, styles.item]}
          >
            <Text style={styles.itemText}>Six</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => audio("seven")}
            style={[{ backgroundColor: BackgroundColor[7] }, styles.item]}
          >
            <Text style={styles.itemText}>Seven</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => audio("eight")}
            style={[{ backgroundColor: BackgroundColor[8] }, styles.item]}
          >
            <Text style={styles.itemText}>Eight</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => audio("nine")}
            style={[{ backgroundColor: BackgroundColor[9] }, styles.item]}
          >
            <Text style={styles.itemText}>Nine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => audio("ten")}
            style={[{ backgroundColor: BackgroundColor[10] }, styles.item]}
          >
            <Text style={styles.itemText}>Ten</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  grid: {
    flex: 1,
    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 15
  },
  itemText: {
    color: "white",
    fontSize: 20
  },
  row: { flex: 1 },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  }
});
