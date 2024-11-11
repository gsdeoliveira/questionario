import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebase';  // Certifique-se de que o Firebase está configurado corretamente

const useAuth = () => {
  const { navigate } = useNavigation();

  // Função de login
  const signin = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      navigate('Página Inicial', { user: userCredential.user });
    } catch (error) {
      throw new Error('Erro ao tentar autenticar.');
    }
  };

  // Função de registro
  const register = async ({ email, password, displayName }) => {
    try {
      // Criar usuário com e-mail e senha
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Atualizar o nome de exibição do usuário após o registro
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }

      console.log('Usuário registrado com sucesso', userCredential);
      navigate('Página Inicial', { user: userCredential.user });
    } catch (error) {
      // Aqui podemos tratar os erros específicos do Firebase
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('Este e-mail já está em uso.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('A senha é muito fraca. Utilize uma senha mais forte.');
      } else {
        throw new Error('Erro ao tentar registrar o usuário.');
      }
    }
  };

  return {
    signin,
    register,
  };
};

export default useAuth;
