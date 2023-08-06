import { View, Text, Button, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Link } from "expo-router"

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Profile</Text>
      <View style={styles.btnContent}>
        <Link href="/update/zulx" style={styles.button}>Update Profile 1</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: 200,
    textAlign: 'center',
  },
  btnContent: {
    alignItems: 'center',
    marginTop: 20,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 30
  }
})