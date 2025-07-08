import React, { useState, useEffect } from 'react';

function EntryForm({ addEntry, editEntry }) {
  const [name, setName] = useState('');
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  useEffect(() => {
    if(editEntry) {
        setName(editEntry.name);
        setItem(editEntry.item);
        setQuantity(editEntry.quantity);
        setDate(editEntry.date);
    }
  }, [editEntry])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !item) return;

    addEntry({ name, item, quantity, date });
    setName('');
    setItem('');
    setQuantity(1);
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="text"
        placeholder="Publisher"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
      />
      <input
        type="text"
        placeholder="Item Ordered"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
      />
      <button type="submit" style={{ width: '100%' }}>{editEntry ? "Update Entry" : "Add Entry"}</button>
    </form>
  );
}

export default EntryForm;
