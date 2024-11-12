import React, {useEffect, useState} from 'react';
import * as SQLite from 'expo-sqlite';
import { View, Image, Text, TextInput, Button, ImageBackground, Alert } from 'react-native';
import user from '../../assets/user.png'; 
import { styles } from './styles';
import useQuestionario from '../../hooks/questionario';
import useAuth from '../../hooks/auth';
export const Register = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();

  const handleRegister = async () => {
    console.log("chamado")
      try {
        const user = await register({ email, password })
        console.log(user)
        if (user) navigation('tab')
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
          <Text style={styles.text}>Cadastre-se</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder="Email" placeholderTextColor='white' style={styles.input} value={email}
        onChangeText={setEmail}
        keyboardType="email-address" />
          <TextInput placeholder="Senha" placeholderTextColor='white' style={styles.input} value={password}
        onChangeText={setPassword}
        secureTextEntry />
        </View>
        <View style={styles.button}>
          <Button title="Cadastrar" onPress={handleRegister} />
          <Text style={styles.cadastrar}>
            Já possui uma conta? <Text onPress={() => navigation.navigate('Login')} style={{textDecoration: 'underline'}}>entrar</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
