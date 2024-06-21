import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleCancel = () => {
    // Navigate to HomeScreen
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    // Navigate to ForgotPasswordScreen
    navigation.navigate('ForgotPassword');
  };

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>VEUILLEZ ENTRER VOS IDENTIFIANTS</Text>
        <TextInput
          style={styles.input}
          placeholder="ADRESSE MAIL"
          placeholderTextColor="#fff"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="MOT DE PASSE"
          placeholderTextColor="#fff"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCancel}>
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 15,
    marginBottom: 50,
    textAlign: 'center',
    width: '100%',
    color: '#fff',
    backgroundColor: '#A7A2A2',
    borderRadius: 20,
    padding: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    // marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#A7A2A2',
    color: '#fff',
    borderRadius: 25,
    textAlign: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    flex: 1,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginTop: 25,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
  },
  buttonText: {
    color: 'black',
    marginBottom: 5,

  },
  forgotPasswordText: {
    marginTop: 30,
    color: 'black',
    backgroundColor: '#ccc',
    borderRadius: 25,
    padding: 3,
    textAlign: 'center',
    marginBottom: 189,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
