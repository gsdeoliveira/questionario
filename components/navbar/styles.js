import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  username: {
    color: '#fff',
    fontSize: 16,
  },
});