import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function ProgressBar() {
  return (
    <BlurView style={styles.container} intensity={70} tint="dark">
      <Text style={styles.text}>Progress </Text>
      <Text style={styles.text}>30 of 50 States Visited</Text>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: "78%",           // Distance from top
    left: "5%",          // Distance from left
    right: "5%",         // Distance from right (makes it responsive)
    padding: 30,
    borderRadius: 8,
    zIndex: 1000,
    overflow: 'hidden'
  },
  text: {
    color: "white",
    alignItems: "flex-start",
    fontWeight: "700"
  },
});
