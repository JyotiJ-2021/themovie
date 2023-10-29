import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import TabViewScreen from "../components/TabViewScreen";
import React, { useEffect, useState } from "react";
import { FlatGrid } from "react-native-super-grid";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [popular, setPopular] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b5442b14a2520d503b9281919c165828",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTQ0MmIxNGEyNTIwZDUwM2I5MjgxOTE5YzE2NTgyOCIsInN1YiI6IjY1M2UyMzAyZTg5NGE2MDExY2EzZjgwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AidiLJdqnuRfz1ILjfITuiEqZYcvXPobK4eyWZV8H7E`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPopular(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <View style={styles.box}>
        <View style={styles.searchbox}>
          <TextInput
            placeholder="Avengers"
            keyboardType="default"
            style={styles.search}
          />
          <Image
            source={require("../assets/images/search-normal.png")}
            style={styles.image}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <FlatGrid
            itemDimension={150}
            data={popular}
            spacing={5}
            renderItem={({ item, index }) => (
              <>
                <View key={index}>
                  <TouchableOpacity
                    style={styles.boxShadow}
                    onPress={() =>
                      navigation.navigate("Detail", {
                        item,
                      })
                    }
                  >
                    <View>
                      <Image
                        source={{
                          uri: item.poster_path,
                        }}
                        style={styles.images}
                      />
                    </View>

                    <Text style={styles.txtt}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          />
        </View>
      </View>
      <TabViewScreen />
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    width: "100%",
    paddingBottom: 190,
  },
  searchbox: {
    width: "100%",

    flexDirection: "row",
    position: "relative",
  },
  search: {
    color: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: 50,
    width: "100%",
    borderRadius: 20,
    padding: 10,
  },
  image: {
    position: "absolute",
    right: 10,
    top: 60,
  },
  images: {},
  txtt: {
    color: "#fff",
  },
  images: {
    borderWidth: 1,
    borderColor: "#fff",
    height: 200,

    flexDirection: "column",
    borderRadius: 10,
    gap: 5,
  },
  boxShadow: {
    height: 180,

    flexDirection: "column",
    borderRadius: 10,
    gap: 5,
    marginBottom: 40,
  },
});
