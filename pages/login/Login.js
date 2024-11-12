import React, {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import * as SQLite from 'expo-sqlite';
import { View, Image, Text, TextInput, Button, ImageBackground, Alert } from 'react-native';
import user from '../../assets/user.png'; 
import { styles } from './styles';
import useQuestionario from '../../hooks/questionario';
import useAuth from '../../hooks/auth';
export const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin } = useAuth();

  const handleLogin = async () => {
      try {
        const user = await signin({ email, password })
        console.log(user)
        if (user) {
          Toast.show({
            type: 'success',
            text1: 'Login bem-sucedido',
            visibilityTime: 3000,
          });
          navigation.navigate('Página Inicial', { user });
        }
      } catch (error) {
        Alert.alert('Erro', error.message)
      }
  };

  return (
    <ImageBackground
      source={require('./../../assets/bg.png')} 
      style={styles.homeContainer}  
      resizeMode="cover"  
    >
      <View style={styles.loginContainer}>
        <View style={styles.flexCol}>
          <Image source={user} style={styles.image} />
          <Text style={styles.text}>Entrar</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder="Email" style={styles.input} value={email}
        onChangeText={setEmail}
        keyboardType="email-address" />
          <TextInput placeholder="Senha" style={styles.input} value={password}
        onChangeText={setPassword}
        secureTextEntry />
        </View>
        <View style={styles.button}>
          <Button title="Entrar" onPress={handleLogin} />
          <Text style={styles.cadastrar}>
            Não possui uma conta? <Text onPress={() => navigation.navigate('Register')} style={{textDecoration: 'underline'}}>cadastre-se</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
