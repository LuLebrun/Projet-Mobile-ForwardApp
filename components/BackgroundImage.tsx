import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

const BackgroundImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {children}
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
  overlay: {
    flex: 1,
    backgroundColor: '#557C85',
    opacity: 0.8, 
  },
});

export default BackgroundImage;
