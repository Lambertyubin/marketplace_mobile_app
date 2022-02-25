import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";


function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  text: {
    padding: 20,
  },
});

export default PickerItem;