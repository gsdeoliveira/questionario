import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { styles } from './styles';

export const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./../../assets/bg-top.png')} 
      style={styles.homeContainer}  
      resizeMode="cover"  
    >
      <Text style={styles.title}>Bem Vindo ao{"\n"}Questionário</Text>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Text style={{ color: 'white' }}>Clique no botão abaixo para começar</Text>
        <View style={styles.button}>
          <Button
            title="Iniciar Questionário"
            onPress={() => navigation.navigate('Perguntas')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
