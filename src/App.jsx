import React, { useState, useEffect } from 'react'
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import SearchBar from './components/SearchBar';
import './App.css'

function App() {
  const [entries, setEntries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editEntry, setEditEntry] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('lit_entries')) || [];
    setEntries(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('lit_entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    if (editEntry) {
      setEntries((prev) =>
      prev.map((e) => (e.id === editEntry.id ? { ...editEntry, ...entry } : e))
    );
    setEditEntry(null);
    } else {
      setEntries((prev) => [...prev, {...entry, id: Date.now().toString() }]);
    }
  };

  const deleteEntry = (id) => {
    if(window.confirm("Are you sure you want to delete this entry?")) {
      setEntries((prev) => prev.filter((entry) => entry.id !== id));
    }
  };

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
