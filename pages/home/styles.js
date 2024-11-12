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

  title: {
    marginTop: 150,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 28,
    textAlign: 'start',
    fontWeight: 'bold',
    color: 'white',
  },

  textoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },

  texto: {
    backgroundColor: '#4b4b4b',
    borderRadius: 5,
    color: 'white',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  button: { 
    width: '100%',
    color: 'white',
    borderRadius: 5,
  }

});