// Text.jsx
import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
});

const Text = ({ style, ...props }) => {
  const textStyle = [styles.text, style];
  return <NativeText style={textStyle} {...props} />;
};

export default Text;
