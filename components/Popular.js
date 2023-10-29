import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
const DEVICEwIDTH = Dimensions.get("window").width;

const Popular = () => {
  const [popular, setPopular] = useState();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b5442b14a2520d503b9281919c165828",
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

  //https://api.themoviedb.org/3/movie/507089/videos?api_key=b5442b14a2520d503b9281919c165828
  return (
    <View>
      <Text style={styles.text}>Popular</Text>
      <View style={styles.popular}>
        <FlatList
          data={popular}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.poster_path }}
                style={styles.textimg}
              />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  popular: {
    flexDirection: "row",
    gap: 20,
    overflow: "scroll",
  },
  text: {
    color: "#fff",
    textAlign: "left",
    fontSize: 25,
    marginTop: 30,
    fontWeight: "600",
    marginBottom: 30,
  },
  textimg: {
    height: 180,
    width: 130,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
  },
  itemContainer: { margin: 0 },
  title: {
    fontSize: 15,
    color: "#fff",
    marginTop: 10,
  },
});
