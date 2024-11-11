import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const Resultado = ({ route, navigation }) => {

  const interpretScore = (score) => {
    if (score <= 7) return 'Normal';
    if (score <= 10) return 'Leve';
    if (score <= 14) return 'Moderado';
    return 'Grave';
  };

  const anxietyLevel = interpretScore(7);
  const depressionLevel = interpretScore(14);

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
      <Text style={styles.title}>Resultados do Questionário HAD</Text>
      
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Ansiedade: {7} ({anxietyLevel})</Text>
        <Text style={styles.scoreText}>Depressão: {14} ({depressionLevel})</Text>
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
