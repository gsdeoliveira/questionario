// components/Login.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ handleLogin, setUsername, setPassword }) => (
  <View style={styles.loginContainer}>
    <Text style={styles.loginTitle}> Faça seu login </Text>
    <TextInput style={styles.loginInput} placeholder="Usuário" onChangeText={setUsername} />
    <TextInput style={styles.loginInput} placeholder="Senha" secureTextEntry onChangeText={setPassword} />
    <Button title="Entrar" onPress={handleLogin} />
  </View>
);

const styles = StyleSheet.create({
  loginContainer: {
   marginTop: 80,
   flex: 1,
   height: 0,
   justifyContent: 'flex-start',
   alignItems: 'center',
  },
  loginTitle: {
    color: 'white',
    fontSize: 24,
    marginTop: 80,
    marginBottom: 20,
  },
  loginInput: {
    color: 'white',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 100,
  },
});

export default Login;
