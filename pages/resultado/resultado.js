import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Resultado = ({ route, navigation }) => {

  const [ansiedade, setAnsiedade] = useState(0);
  const [depressao, setDepressao] = useState(0);
  
  useEffect(() => {
    const loadScores = async () => {
      try {
        const ansiedadeScore = await AsyncStorage.getItem('ansiedade');
        const depressaoScore = await AsyncStorage.getItem('depressão');
        setAnsiedade(parseInt(ansiedadeScore, 10) || 0);
        setDepressao(parseInt(depressaoScore, 10) || 0);
      } catch (e) {
        console.error('Erro ao carregar pontuações', e);
      }
    };
    
    loadScores();
  }, [])
  
  const interpretScore = (score) => {
    if (score <= 7) return 'Normal';
    if (score <= 10) return 'Leve';
    if (score <= 14) return 'Moderado';
    return 'Grave';
  };


  const anxietyLevel = interpretScore(ansiedade);
  const depressionLevel = interpretScore(depressao);

  const getRecommendation = () => {
    if (anxietyLevel === 'Grave' || depressionLevel === 'Grave') {
      return 'Recomendamos que você procure um profissional de saúde mental para discutir esses resultados.';
    } else if (anxietyLevel === 'Moderado' || depressionLevel === 'Moderado') {
      return 'Você pode estar enfrentando desafios emocionais moderados. Considere buscar apoio de amigos, familiares ou profissionais.';
    } else {
      return 'Seus resultados estão dentro da normalidade, mas é sempre bom cuidar da saúde mental!';
    }
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Resultados</Text>
      
      <View style={styles.scoreContainer}>
        <Text style={{color: 'white', backgroundColor: '#4b4b4b', borderRadius: 5, padding: 10, marginLeft: 20, marginRight: 10}}>Ansiedade: {ansiedade} de 21 ({anxietyLevel})</Text>
        <Text style={{color: 'white', backgroundColor: '#4b4b4b', borderRadius: 5, padding: 10, marginLeft: 20, marginRight: 10, marginTop: 10}}>Depressão: {depressao} de 21 ({depressionLevel})</Text>
      </View>

      <Text style={styles.recommendation}>{getRecommendation()}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Página Inicial" onPress={() => navigation.navigate('Página Inicial')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color : 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scoreContainer: {
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  recommendation: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
