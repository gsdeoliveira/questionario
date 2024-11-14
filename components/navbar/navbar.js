// Navbar.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles';

export const Navbar = ({ username }) => {
  return (
    <View style={styles.navbar}>
      Logo
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

