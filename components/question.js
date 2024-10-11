import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Question = ({ question, handleAnswerChange, currentQuestionIndex }) => {
  const handleAnswerAndNext = (answer) => {
    handleAnswerChange(answer); // Armazena a resposta
  };

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>
        Pergunta {currentQuestionIndex + 1}: {question}
      </Text>
      <View style={styles.answerContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Resposta 1" onPress={() => handleAnswerAndNext(3)} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Resposta 2" onPress={() => handleAnswerAndNext(2)} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Resposta 3" onPress={() => handleAnswerAndNext(1)} />
        </View>
          <View style={styles.buttonWrapper}>
          <Button title="Resposta 4" onPress={() => handleAnswerAndNext(1)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    alignItems: 'center',
  },
  questionText: {
    color: 'white',
    marginTop: 60,
    fontSize: 18,
    marginBottom: 20,
  },
  answerContainer: {
    marginBottom: 20,
  },
  buttonWrapper: {
    marginBottom: 10, // Adiciona uma margem inferior entre os botões
    width: '100%', // Ajusta a largura dos botões para deixar o layout mais centralizado
  },
});

export default Question;
