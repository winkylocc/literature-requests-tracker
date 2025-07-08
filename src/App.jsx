import React, { useState, useEffect } from 'react'
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import SearchBar from './components/SearchBar';
import { db } from './firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

// Styles
import './styles/main.scss';


function App() {
  const [entries, setEntries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editEntry, setEditEntry] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'entries'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setEntries(data)
    })
  
    return () => unsubscribe()
  }, [])
  

  const addEntry = async (newEntry) => {
  
    try {
      const docRef = await addDoc(collection(db, 'entries'), newEntry);
    } catch (error) {
      console.error("❌ Failed to add entry:", error);
    }
  };  
  
  const deleteEntry = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      await deleteDoc(doc(db, 'entries', id))
      // ✅ Firestore will handle update
    }
  }   

  const startEdit = (entry) => {
    setEditEntry(entry)
  };

  const filteredEntries = entries.filter(e =>
    e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Literature Requests Tracker</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EntryForm addEntry={addEntry} editEntry={editEntry}/>
      <EntryList entries={filteredEntries} onDelete={deleteEntry} onEdit={startEdit} />
    </div>
  )
}

export default App
