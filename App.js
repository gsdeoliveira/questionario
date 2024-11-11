import React from 'react';
import { View, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/home/home';
import { Questions } from './components/questions/questions';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          cardStyleInterpolator: ({ current, next, layouts }) => {
            const translateX = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            });

            return {
              cardStyle: {
                transform: [{ translateX }],
              },
            };
          },
        }}
      >
        <Stack.Screen name="Página Inicial" component={Home} />
        <Stack.Screen name="Perguntas" component={Questions} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
