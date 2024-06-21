import React from 'react';
import { View, StyleSheet } from 'react-native';

const BottomBar = () => {
  return <View style={styles.bottomBar} />;
};

const styles = StyleSheet.create({
  bottomBar: {
    width: '100%',
    height: 100,
    backgroundColor: '#557C85',
  },
});

export default BottomBar;
