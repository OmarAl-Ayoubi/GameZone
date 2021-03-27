import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";
export default function Home({ navigation }) {
  const [modalOpen, SetModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: "Zelda", rating: 3, body: "ssss", key: "1" },
    { title: "Dota 2", rating: 5, body: "ssss", key: "2" },
    { title: "LOL", rating: 1, body: "ssss", key: "3" },
  ]);
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    SetModalOpen(false);
  };
  // const pressHandler = () => {
  //   navigation.navigate("ReviewDetails");
  // };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.modalContent}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name="close"
                size={24}
                style={{ ...styles.modalToggle, ...styles.modalClose }}
                onPress={() => SetModalOpen(false)}
              />
              <View style={{ flex: 1 }}>
                <ReviewForm addReview={addReview} />
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => SetModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titelText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 12,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
