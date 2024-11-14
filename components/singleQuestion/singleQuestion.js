import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { Loading } from '../loading/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SingleQuestion = ({ question, index, setIndex }) => {
  const [pontuacao, setPontuacao] = useState(0);

  useEffect(() => {
    const loadPontuacao = async () => {
      try {
        const pont = await AsyncStorage.getItem(question.categoria);
        if (pont) {
          setPontuacao(parseInt(pont, 10)); 
        }
      } catch (e) {
        console.error('Erro ao carregar a pontuação', e);
      }
    };

    loadPontuacao();
  }, [question.categoria]); 

  const handleNextQuestion = async (valor) => {
    try {
      const currentPontuacao = await AsyncStorage.getItem(question.categoria);
      const novaPontuacao = (parseInt(currentPontuacao, 10) || 0) + valor;

      await AsyncStorage.setItem(question.categoria, novaPontuacao.toString());
      console.log('Pontuação salva!');

      setPontuacao(novaPontuacao);

      setIndex((prev) => prev + 1); 
    } catch (error) {
      console.error('Erro ao atualizar a pontuação', error);
    }
  };

  if (!question) {
    return <Loading />;
  }

  return (
    <View style={styles.questionContainer}>
      <View>
        <View style={{ padding: 20 }}>
          <Text style={{ color: 'white' }}>
            Pergunta {index + 1} de 14
          </Text>
          <Text style={styles.title}>{question.pergunta}</Text>
        </View>
        {question.opcoes.map((answer, idx) => (
          <View key={idx} style={{margin: 5}}>
            <Button
              style={{width: '100%'}}
              title={answer.texto}
              onPress={() => handleNextQuestion(answer.valor)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
