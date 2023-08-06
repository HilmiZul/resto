import { View, Text, StyleSheet } from 'react-native'
import { useSearchParams, Stack } from 'expo-router'

export default function UpdateProfile() {
  const { user } = useSearchParams()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{  headerTitle: `Update Profile` }} />
      <Text style={styles.txt}>Update Profile {user}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 30
  }
})