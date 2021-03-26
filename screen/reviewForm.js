import React from "react";
import { Button, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Review Rating"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
            />
            <Button
              title="submit"
              color="maroon"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
