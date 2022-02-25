import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons"
// import GestureHandler from 'expo'
// const {Swipeable} = GestureHandler

import defaultStyles from "../config/styles";


function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons,
}) {
  return (
    <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={defaultStyles.colors.light} onPress={onPress}>
              <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    {subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
                </View>
                { showChevrons && 
                  (<MaterialCommunityIcons
                    name="chevron-right"
                    size={25}
                    color={defaultStyles.colors.medium}
                  />)
                }
              </View>
            </TouchableHighlight>
        </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: defaultStyles.colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  subTitle: {
    color: defaultStyles.colors.medium
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
