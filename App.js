import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/home/home';
import { Questions } from './components/questions/questions';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Navbar } from './components/navbar/navbar';
import { Resultado } from './pages/resultado/resultado';

const Stack = createStackNavigator();

export default function App() {
  // Defina o estado do nome do usuário
  const [username, setUsername] = useState('Usuário');

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Página Inicial">
            {(props) => <Home {...props} setUsername={setUsername} />}
          </Stack.Screen>
          <Stack.Screen name="Perguntas" component={Questions} />
          <Stack.Screen name="Resultado" component={Resultado} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
