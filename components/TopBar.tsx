import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#557C85', // Couleur de fond de la barre supérieure
    flexDirection: 'row',
  },
  logo: {
    width: 200, // Largeur du logo
    height: 50, // Hauteur du logo
    borderRadius: 15, 
  },

});

export default TopBar;

