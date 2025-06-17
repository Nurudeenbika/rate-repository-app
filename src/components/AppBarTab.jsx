import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  tabText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

const AppBarTab = ({ tab, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.tabText}>{tab}</Text>
    </Pressable>
  );
};

export default AppBarTab;
