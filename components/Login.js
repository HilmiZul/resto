import { 
  KeyboardAvoidingView,
  StyleSheet, Text, TextInput, TouchableOpacity, View 
} from "react-native";

export default function Login() {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <Text style={styles.logo}>🍔</Text>
        <Text style={styles.title}>R E S T O R A N.</Text>
        <View>
          <TextInput
            style={styles.inputEmail}
            keyboardType={"email-address"}
            placeholder={"masukkan email"}
            placeholderTextColor={"#9f9f9f"}
            keyboardAppearance={"dark"}
          />
          <TextInput
            style={styles.inputPass}
            placeholder={"masukkan password"}
            placeholderTextColor={"#9f9f9f"}
            secureTextEntry={true}
            keyboardAppearance={"dark"}
          />
          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.textButon}>LOGIN 🚀</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  textButon: {
    color: '#0a0a0a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    marginTop: 20,
    backgroundColor: '#fff'
  },
  inputEmail: {
    borderColor: '#fff',
    borderWidth: 2,
    fontSize: 15,
    padding: 15,
    marginTop: 20,
    width: 300,
    color: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputPass: {
    borderColor: '#fff',
    borderWidth: 2,
    fontSize: 15,
    padding: 15,
    marginTop: 10,
    width: 300,
    color: '#fff',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  title: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  logo: {
    fontSize: 90,
    textAlign: 'center',
    marginBottom: 20,
  }
})