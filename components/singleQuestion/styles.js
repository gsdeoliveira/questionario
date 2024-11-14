import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  questionContainer: {
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },

  button: { 
    width: '100%',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    borderRadius: 5,
  },
})