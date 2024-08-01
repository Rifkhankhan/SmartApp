import {
	child,
	endAt,
	get,
	getDatabase,
	orderByChild,
	push,
	query,
	ref,
	remove,
	startAt
} from 'firebase/database'
import { getFirebaseApp } from '../firebaseHelper'

export const getUserData = async userId => {
	try {
		//This line calls the getFirebaseApp function
		//to get the initialized Firebase app instance and stores it in the app constant
		const app = getFirebaseApp()

		// This line gets a reference to the Firebase Realtime Database associated with the app instance by calling getDatabase(app).
		//The ref function is then used to get a reference to the root of the database.
		const dbRef = ref(getDatabase(app))

		//This line creates a reference to a specific child node within the database.
		//It appends the userId to the users node, creating a reference to the path users/{userId}.
		const userRef = child(dbRef, `users/${userId}`)

		//this line uses the get function to fetch the data at the userRef path.
		//The await keyword ensures that the function waits for the data to be retrieved before continuing.
		//The retrieved data is stored in the snapshot constant.
		const snapshot = await get(userRef)

		//This line returns the value of the data stored in the snapshot.
		//The val method extracts the data from the snapshot.
		return snapshot.val()
	} catch (error) {
		console.log(error)
	}
}

export const getUserChats = async userId => {
	try {
		const app = getFirebaseApp()
		const dbRef = ref(getDatabase(app))
		const userRef = child(dbRef, `userChats/${userId}`)

		const snapshot = await get(userRef)
		return snapshot.val()
	} catch (error) {
		console.log(error)
	}
}

export const deleteUserChat = async (userId, key) => {
	try {
		const app = getFirebaseApp()
		const dbRef = ref(getDatabase(app))
		const chatRef = child(dbRef, `userChats/${userId}/${key}`)

		await remove(chatRef)
	} catch (error) {
		console.log(error)
		throw error
	}
}

export const addUserChat = async (userId, chatId) => {
	try {
		const app = getFirebaseApp()
		const dbRef = ref(getDatabase(app))
		const chatRef = child(dbRef, `userChats/${userId}`)

		await push(chatRef, chatId)
	} catch (error) {
		console.log(error)
		throw error
	}
}

export const searchUsers = async queryText => {
	const searchTerm = queryText.toLowerCase()

	try {
		const app = getFirebaseApp()
		const dbRef = ref(getDatabase(app))
		const userRef = child(dbRef, 'users')

		const queryRef = query(
			userRef,
			orderByChild('firstLast'),
			startAt(searchTerm),
			endAt(searchTerm + '\uf8ff')
		)

		const snapshot = await get(queryRef)

		if (snapshot.exists()) {
			return snapshot.val()
		}

		return {}
	} catch (error) {
		console.log(error)
		throw error
	}
}
