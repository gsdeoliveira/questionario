import React, {useEffect, useState} from 'react';
import { View, Image, Text, TextInput, Button, ImageBackground } from 'react-native';
import user from '../../assets/user.png'; 
import { styles } from './styles';
import useQuestionario from '../../hooks/questionario';
export const Login = ({navigation}) => {

  return (
    <ImageBackground
      source={require('./../../assets/bg-top.png')} 
      style={styles.homeContainer}  
      resizeMode="cover"  
    >
      <View style={styles.loginContainer}>
        <View style={styles.flexCol}>
          <Image source={user} style={styles.image} />
          <Text style={styles.text}>Login</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Senha" style={styles.input} />
        </View>
        <View style={styles.button}>
          <Button title="Entrar" onPress={() => navigation.navigate('Página Inicial')} />
          <Text style={styles.cadastrar}>
            Não possui uma conta? <Text style={{textDecoration: 'underline'}}>cadastre-se</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
