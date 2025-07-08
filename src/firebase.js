// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAZugNhgLochUUHLKuLyJp4IPazkHX1Wyo',
  authDomain: 'literature-requests-tracker.firebaseapp.com',
  projectId: 'literature-requests-tracker',
  storageBucket: 'literature-requests-tracker.firebasestorage.app',
  messagingSenderId: "715167677552",
  appId: "1:715167677552:web:5b7358ea260971f65448b5"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
