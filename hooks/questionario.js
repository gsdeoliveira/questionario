import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const useQuestionario = () => {
	const questionarioRef = collection(db, 'questionario')

	const saveData = async (data) => {
		try {
			await setDoc(doc(tarefasRef), data)
		} catch (error) {
			throw new Error('Erro ao gravar dados.')
		}
	}

	const getData = async () => {
		try {
			const data = []
			const q = query(questionarioRef)
			const querySnapshot = await getDocs(q)
			querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
			return data
		} catch (error) {
			throw new Error('Erro ao recuperar dados.')
		}
	}

	return {
		getData,
		saveData,
	}
}

export default useQuestionario