import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen'; 
import HomeScreen from './Screens/HomeScreen'; 
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen'; 
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar'; 
import BackgroundImage from './components/BackgroundImage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BackgroundImage>
        <View style={styles.container}>
          <TopBar />
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
            />
            <Stack.Screen 
              name="ForgotPassword" 
              component={ForgotPasswordScreen} 
              options={{ title: 'Réinitialiser le mot de passe' }} 
            />
          </Stack.Navigator>
          <BottomBar />
        </View>
      </BackgroundImage>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
