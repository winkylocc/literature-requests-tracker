import React from 'react';

function EntryList({ entries }) {
  if (entries.length === 0) {
    return <p>No entries found.</p>;
  }

  return (
    <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
      {entries.map((entry) => (
        <li key={entry.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '0.5rem' }}>
          <strong>{entry.name}</strong> ordered <strong>{entry.quantity}</strong> of <em>{entry.item}</em><br />
          <small>Date: {entry.date}</small><br />
          <button onClick={() => ondevicemotion(entry)} style={{ marginRight: "0.5rem"}}>Edit</button>
          <button onClick={() => onDelete(entry.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EntryList;
