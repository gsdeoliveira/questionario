import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#363634',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },

  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  scoreContainer: {
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  recommendation: {
    fontSize: 16,
    color: '#555',
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    gap: 10,
  }

});