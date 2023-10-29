import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import TabViewScreen from "../components/TabViewScreen";

const ProfileScreen = () => {
  return (
    <>
      <View style={styles.box}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require("../assets/close-circle.png")}
          />
          <Text style={styles.text}>My Profile</Text>
        </View>
        <View>
          <Image
            style={styles.imageUrl}
            source={require("../assets/image_15.png")}
          />
          <Text style={styles.texst}>Jhon Doe</Text>
        </View>
        <View style={styles.list}>
          <View style={styles.images}>
            <Image source={require("../assets/images/user.png")} />
            <View style={styles.account}>
              <Text style={styles.txt}>Account</Text>
              <Text style={styles.txt}>Edit Profile</Text>
              <Text style={styles.txt}>Change Password</Text>
            </View>
          </View>

          <View>
            <Image source={require("../assets/arrow-left.png")} />
          </View>
        </View>

        <View style={styles.list}>
          <View style={styles.images}>
            <Image source={require("../assets/setting.png")} />
            <View style={styles.account}>
              <Text style={styles.txt}>Setting</Text>
              <Text style={styles.txt}>Themes</Text>
              <Text style={styles.txt}>Permissions</Text>
            </View>
          </View>

          <View>
            <Image source={require("../assets/arrow-left.png")} />
          </View>
        </View>
        <View style={styles.loginbox}>
          <TouchableOpacity>
            <Text style={styles.loginbtn}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabViewScreen />
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flexDirection: "row",
    marginTop: 40,

    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    left: 0,
  },
  imageUrl: {
    marginTop: 40,
    padding: 20,
    borderRadius: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  texst: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 30,
  },
  images: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  account: {
    flexDirection: "column",
    color: "#fff",
  },
  txt: {
    fontSize: 15,
    color: "#fff",
  },
  loginbox: {
    position: "absolute",
    bottom: 150,
    width: "100%",
  },
  loginbtn: {
    color: "#fff",
    width: "100%",
    backgroundColor: "#E33939",
    fontSize: 15,
    textAlign: "center",
    padding: 15,
    borderRadius: 20,
  },
});
