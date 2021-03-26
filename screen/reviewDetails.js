import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";
export default function Review({ navigation }) {
  const rating = navigation.getParam("rating");
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        {/* <Text>{navigation.getParam("rating")}</Text> */}
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.rating[rating]}></Image>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#eee",
  },
});
