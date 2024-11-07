import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export const SingleQuestion = ({ question, index, setIndex }) => {
  
  if(!question) {
    return <Text>Carregando...</Text>
  }

  return (
    <View style={styles.questionContainer}>
      <View>
        <View style={{padding: 20}}>
         <Text style={{color: 'white'}}>Pergunta {index + 1} de 14</Text>
         <Text style={styles.title}>{question.pergunta}</Text>
        </View>
        {question.opcoes.map((answer, index) => (
          <View key={index} style={styles.button}> 
            <Button
              title={answer.texto}
              onPress={() => setIndex((prev) => prev + 1)} 
            />
          </View>
      ))}
      </View>
    </View>
  );
};
