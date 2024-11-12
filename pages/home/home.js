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
      <Text style={styles.title}>Bem Vindo(a)!</Text>
      <View style={styles.textoContainer}>
        <Text style={{color: 'white', paddingLeft: 20, paddingRight: 20, marginTop: -20, marginBottom: 20}}>Este questionário utiliza a escala HAD (Hospital Anxiety and Depression Scale) para medir sintomas de ansiedade e depressão.</Text>
        <Text style={styles.texto}>- Cada pergunta tem quatro opções. Escolha a resposta que melhor descreve como você se sentiu na última semana.</Text>
        <Text style={styles.texto}>- Não existem respostas certas ou erradas, seja o mais sincero possível.</Text>
        <Text style={styles.texto}>- Esse questionário é uma ferramenta de autoavaliação e não substitui o diagnóstico de um profissional.</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{color: 'white', textAlign: 'center'}}>Clique no botão abaixo para começar</Text>
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
