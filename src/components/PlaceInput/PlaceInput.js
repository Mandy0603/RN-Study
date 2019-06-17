import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const placeInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        value={props.placeName}
        placeholder="an awesome string"
        onChangeText={props.placeNameChangedHandler}
      />
      <Button
        style={styles.placeButton}
        title="Add"
        onPress={props.placeSubmitHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default placeInput;
