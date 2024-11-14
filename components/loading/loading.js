import React from 'react'
import { View, Text, ImageBackground, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export const Loading = () => {
  return (
    <ImageBackground
      source={require('./../../assets/bg.png')}
      style={styles.homeContainer}
      resizeMode="cover"
    >
      <ActivityIndicator size="large" />
    </ImageBackground>
  )
}
