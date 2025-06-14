import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { statesArray } from '../../data/states';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollContent}>
          {statesArray.map((state: string, index: number) => (
            <TouchableOpacity>
              <View key={index} style={styles.card}>
                  <Text style={styles.text}>{state}</Text>
              </View>
            </TouchableOpacity>))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  scrollview: {
    width: "100%",
  },
  scrollContent: {
    paddingBottom: 60

  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "700"
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    margin: 4,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3.84,
    elevation: 5
  },
});
