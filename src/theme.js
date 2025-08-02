import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    appBarBackground: "#24292e", // Added for the AppBar
    white: "#ffffff",
    separator: "#e1e4e8", // Light grey for separators
    background: "#f6f8fa", // A light background for the general app/list
    error: "#d73a4a", // Error color for validation messages
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    color: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
