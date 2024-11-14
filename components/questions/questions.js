import React, { useState, useRef, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ImageBackground, Animated } from 'react-native';
import { SingleQuestion } from '../singleQuestion/singleQuestion';
import { styles } from './styles';
import useQuestionario from '../../hooks/questionario';
import { Resultado } from '../../pages/resultado/resultado';
import { Loading } from '../loading/loading';

export const Questions = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const { getData } = useQuestionario()

  useEffect(() => {
    AsyncStorage.clear();;
    console.log("local storage limpo")
    const fetchData = async () => {
      setLoading(true);
      try {
        const retorno = await getData(); 
        setData(retorno);
        console.log(retorno);
      } catch (err) {
        Alert.alert('Erro', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [index]);

  if(loading) {
    return (
      <Loading />
    )
  }

  const handleNextQuestion = () => {
    Animated.timing(slideAnim, {
      toValue: direction * 1000,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIndex((prev) => prev + 1);
      setDirection(-direction);
    });
  };

  return (
    <ImageBackground
      source={require('./../../assets/bg.png')}
      style={styles.homeContainer}
      resizeMode="cover"
    >
      {index === data.length ? (
        <Resultado navigation={navigation} />
      ) : (
      <View style={styles.questionContainer}>
        <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
          <SingleQuestion
            question={data[index]}
            index={index}
            setIndex={handleNextQuestion}
          />
        </Animated.View>
      </View>
      )}
    </ImageBackground>
  );
};
