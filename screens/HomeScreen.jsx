import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular";
import Upcoming from "../components/Upcoming";
import TabViewScreen from "../components/TabViewScreen";

const HomeScreen = () => {
  return (
    <>
      <ScrollView style={{ marginBottom: 50 }}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image
              style={styles.image}
              source={require("../assets/mask_group.png")}
            />
          </View>
          <View style={styles.filter}>
            <View style={styles.filter_box}>
              <Text style={styles.text}>Popular</Text>
            </View>
            <View style={styles.filter_box}>
              <Text style={styles.text}>Upcoming</Text>
            </View>
            <View style={styles.filter_box}>
              <Text style={styles.text}>Classics</Text>
            </View>
            <View style={styles.filter_box}>
              <Text style={styles.text}>Top 10</Text>
            </View>
          </View>

          <NowPlaying />
          <Popular />
          <Upcoming />
        </View>
      </ScrollView>
      <TabViewScreen />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,

    backgroundColor: "#E33939",
    borderRadius: 50,
  },
  container: {
    backgroundColor: "#000",
    color: "#fff",
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },

  filter: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    marginTop: 20,
  },
  filter_box: {
    padding: 10,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 1,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
});
