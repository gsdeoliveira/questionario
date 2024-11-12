// useAuth.js
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebase';

const useAuth = () => {
  const { navigate } = useNavigation();

  const signin = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      if(error.code === 'auth/invalid-email') {
        Toast.show({
          type: 'error',
          text1: 'Email Inválido!',	
          visibilityTime: 3000,
        });
      }

      if(error.code === 'auth/invalid-credential') {
        Toast.show({
          type: 'error',
          text1: 'Email ou Senha Incorreto(s)!',	
          visibilityTime: 3000,
        });
      }
      console.log("error: -- " + error.code)
      throw new Error('Erro ao tentar autenticar.');
    }
  };

  const register = async ({ email, password, displayName }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }
    } catch (error) {
      if(error.code === 'auth/weak-password') {
        Toast.show({
          type: 'error',
          text1: 'Senha muito fraca!',
          visibilityTime: 3000,
        });
      }

      if(error.code === 'auth/email-already-in-use') {
        Toast.show({
          type: 'error',
          text1: 'Já existe um usuário com este email!',
          visibilityTime: 3000,
        });
      }
      console.log(error.code)
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('Este e-mail já está em uso.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('A senha é muito fraca. Utilize uma senha mais forte.');
      } else {
        throw new Error('Erro ao tentar registrar o usuário.');
      }
    }
  };

  return { signin, register };
};

export default useAuth;
