import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.header}>VEUILLEZ ENTRER VOS IDENTIFIANTS</Text>
        <TextInput placeholder="ADRESSE MAIL" style={styles.input} />
        <TextInput placeholder="MOT DE PASSE" style={styles.input} secureTextEntry />
        <View style={styles.buttonContainer}>
          <Button title="Valider" onPress={() => {}} />
          <Button title="Annuler" onPress={() => {}} />
        </View>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </View>
      <View style={styles.bottomBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    backgroundColor: '#557C85',
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 50,
    // resizeMode: 'contain',
    borderRadius: 17,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 16,
    borderRadius: 10,
    color: '#000',
    marginBottom: 20,
    backgroundColor: '#ccc',
    padding: 10,
    textAlign: 'center',
    width: '100%',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#A7A2A2',
    color: '#fff',
    borderRadius: 20,
    textAlign: 'center',

  },
  buttonContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: '100%',
    // marginBottom: 20,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    // color: 'ccc',

  },
  forgotPassword: {
    marginTop: 10,
    color: 'black',
    backgroundColor: '#ccc',
    borderRadius: 25,
    padding: 3,
    textAlign: 'center',
    marginBottom: 50,
  },
  bottomBar: {
    height: 50,
    backgroundColor: '#557C85',
  },
});

export default HomeScreen;
