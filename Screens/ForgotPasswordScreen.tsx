import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Email envoyé',
        'Un email de réinitialisation de mot de passe a été envoyé à votre adresse email.',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      Alert.alert('Erreur', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réinitialiser le mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="ADRESSE MAIL"
        placeholderTextColor="#fff"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#A7A2A2',
    color: '#fff',
    borderRadius: 25,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 10,
    backgroundColor: '#A7A2A2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 15,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    borderRadius: 25,
  },
});

export default ForgotPasswordScreen;

