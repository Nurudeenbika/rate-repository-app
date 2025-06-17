import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import theme from "../theme";

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count;
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.ownerAvatar}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.headerText}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>
            {formatCount(item.stargazersCount)}
          </Text>
          <Text style={styles.statLabel}>{item.ratingAverage} Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{formatCount(item.forksCount)}</Text>
          <Text style={styles.statLabel}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{formatCount(item.reviewCount)}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>
            {formatCount(item.ratingAverage)}
          </Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.white,
    marginBottom: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  }, // For Android shadow
  ownerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  headerText: {
    flexShrink: 1, // Allow text to wrap if it's too long
  },
  fullName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: theme.colors.textPrimary,
  },
  description: {
    color: "#586069",
    marginBottom: 5,
    fontSize: theme.fontSizes.body,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    // padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start", // Only take up as much space as needed
    marginBottom: 10,
    marginTop: 5,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontWeight: "bold",
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textPrimary,
  },
  statLabel: {
    color: "#586069",
    fontSize: 12,
  },
});

export default RepositoryItem;
