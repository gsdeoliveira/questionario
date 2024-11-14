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
  
  loginContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  image: {
    width: 50,  
    height: 50,
  },

  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    color: 'white',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },

  input: {
    width: 250,
    backgroundColor: '#414139',
    color: 'white',
    borderRadius: 5,
    padding: 10,
  },

  button: { 
    width: 250,
    color: 'white',
    borderRadius: 5,
  },

  cadastrar: {
    color: 'white',
    marginTop: 10,
  },

  underline: {
    textDecoration: 'underline',
  }
});