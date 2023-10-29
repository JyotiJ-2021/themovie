import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const TabViewScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={require("../assets/images/video-play.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View style={styles.box}>
          <Image
            source={require("../assets/images/search-normal.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <View style={styles.box}>
          <Image
            source={require("../assets/images/user.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TabViewScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: "40px",
    padding: 20,
    backgroundColor: "black",
    color: "#fff",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },

  image: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  box: {
    width: "64px",
    height: "64px",
    flexShrink: 0,
    borderRadius: 50,
    backgroundColor: "#E33939",
    padding: 15,
  },
});
