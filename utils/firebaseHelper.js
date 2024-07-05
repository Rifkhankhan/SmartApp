// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

export const getFirebaseApp = () => {
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: 'AIzaSyAJ2aJOh-wRRgOlVymdSpNtX8kuHUDtARw',
		authDomain: 'smartchat-552fd.firebaseapp.com',
		databaseURL: 'https://smartchat-552fd-default-rtdb.firebaseio.com',
		projectId: 'smartchat-552fd',
		storageBucket: 'smartchat-552fd.appspot.com',
		messagingSenderId: '137604353761',
		appId: '1:137604353761:web:4a11b921af3a3bab22f1a0',
		measurementId: 'G-X2WZ49XF1L'
	}

	// Initialize Firebase
	return initializeApp(firebaseConfig)
}
