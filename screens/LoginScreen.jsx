import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.login}>Log In</Text>
      </View>
      <View style={styles.inputbox}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          keyboardType="default"
        />
      </View>
      <View style={styles.inputbox}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="default"
        />
      </View>
      <View style={styles.loginbox}>
        <TouchableOpacity>
          <Text style={styles.loginbtn}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.mention}>
          Don't have an Account? <Text style={styles.signup}> Sign Up </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    paddingTop: 100,
  },
  login: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 40,
  },
  label: {
    color: "#fff",
    position: "absolute",
    marginTop: 10,
    marginLeft: 18,
    backgroundColor: "#000",
    zIndex: 3,
    paddingHorizontal: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    width: 250,
    borderRadius: 20,
    marginVertical: 20,
    color: "#fff",
  },
  inputbox: {
    position: "relative",
  },
  loginbox: {
    position: "absolute",
    bottom: 60,
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
  mention: { color: "#fff", fontSize: 16, marginTop: 20 },
  signup: { color: "#fff", fontWeight: "800" },
});
