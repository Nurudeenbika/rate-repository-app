import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ tab, to }) => {
  return (
    <Link to={to} component={Pressable} style={styles.tab}>
      <Text style={styles.text}>{tab}</Text>
    </Link>
  );
};

export default AppBarTab;
