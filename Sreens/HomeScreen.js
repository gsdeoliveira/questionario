import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Button, Animated, Easing, ImageBackground } from 'react-native';
import Login from '../components/login';
import Question from '../components/question';
import { questions } from '../data/questions';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState('');
  const [started, setStarted] = useState(false);
  
  const slideAnim = useRef(new Animated.Value(0)).current; // Animação para a pergunta

  const handleAnswerChange = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);

    // Verifica se não é a última pergunta
    if (currentQuestionIndex < questions.length - 1) {
      // Animação para a pergunta atual saindo para a esquerda
      Animated.timing(slideAnim, {
        toValue: -400, // Ajuste para o tamanho da tela
        duration: 250,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        // Incrementa o índice da pergunta
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        slideAnim.setValue(400); // Reseta para o tamanho da tela, preparando a entrada

        // Animação para a próxima pergunta entrando pela direita
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 250,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start();
      });
    } else {
      calculateScores(updatedAnswers);
    }
  };

  const calculateScores = (finalAnswers) => {
    const totalScore = finalAnswers.reduce((total, answer) => total + (answer || 0), 0);
    setScore(totalScore);

    let finalMessage = '';

    if (totalScore <= 10) {
      finalMessage = "Frase final para igual ou menor que 10";
    } else if (totalScore >= 11 && totalScore <= 20) {
      finalMessage = "Frase final para igual ou maior que 11 e menor que 20";
    } else if (totalScore >= 21 && totalScore <= 30) {
      finalMessage = "Frase final para igual ou maior que 21 e menor que 30";
    } else if (totalScore >= 31 && totalScore <= 40) {
      finalMessage = "Frase final para igual ou maior que 31 e menor que 40";
    } else if (totalScore >= 41) {
      finalMessage = "Frase final para igual ou maior que 41";
    }

    setMessage(finalMessage);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers(new Array(questions.length).fill(null));
    setScore(null);
    setMessage('');
    setStarted(false);
    slideAnim.setValue(0); // Reseta a animação
  };

  const startQuiz = () => {
    setStarted(true);
  };
// colocar a senha para entrar
  const handleLogin = () => {
    if (username === '' && password === '') {
      setShowLogin(false); // Esconde a tela de login e mostra o questionário
    } else {
      alert('Usuário ou senha inválidos!');
    }
  };

  return (
    <ImageBackground 
      source={require('../react-js-logo-no-1080x2400.jpg')} // Altere para o caminho correto da sua imagem
      style={styles.backgroundImage} // Aplicando estilos à imagem de fundo
      resizeMode="cover" // Ajusta a imagem para cobrir toda a tela
    >
      <View style={styles.container}>
        {showLogin ? (
          <View style={styles.startContainer}>
            <Login 
              handleLogin={handleLogin} 
              setUsername={setUsername} 
              setPassword={setPassword} 
            />
          </View>
        ) : !started ? (
          <View style={styles.startContainer}>
            <Ionicons name="logo-react" size={100} color="blue" /> 
            <Text style={styles.title}>Bem-vindo ao Questionário</Text>
            <Text style={styles.subtitle}>Clique abaixo para começar</Text>
            <Button title="Iniciar questionário" onPress={startQuiz} />
          </View>
        ) : score === null ? (
          <View style={styles.questionContainer}>
            <Animated.View
              style={{
                ...styles.questionContainer,
                transform: [{ translateX: slideAnim }],
              }}
            >
              <Question
                question={questions[currentQuestionIndex]}
                handleAnswerChange={handleAnswerChange}
                currentQuestionIndex={currentQuestionIndex}
              />
            </Animated.View>
          </View>
        ) : (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Pontuação Total: {score}</Text>
            <Text style={styles.resultText}>{message}</Text>
            <Button title="Iniciar novamente" onPress={resetQuiz} />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 0,
    padding: 15,
    justifyContent: 'center',
  },
  startContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 200,
    fontSize: 32,
    color: 'white',
    marginBottom: 100,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  questionContainer: {
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    color: 'white',
    marginTop: 200,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },

  backgroundImage: {
   top: 0,
   left: 0,
   right: 0,
   bottom: 1,
   flex: 1, // Faz com que a imagem ocupe toda a tela
   width: '100%',
   height: '100%',
  // backgroundColor: 'darkslateblue' ,
   //aspectRatio: 1,
   //justifyContent: 'center', // Centraliza o conteúdo
   //alignItems: 'center', // Centraliza o conteúdo
  },
});

export default HomeScreen;
