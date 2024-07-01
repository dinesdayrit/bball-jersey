import React, { useState, useEffect } from 'react';
import AddForm from './AddForm';

interface Entry {
  name: string;
  jerseyNumber: string;
}

const List: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState<string>('');
  const [jerseyNumber, setJerseyNumber] = useState<string>('');

  useEffect(() => {
    // Fetch data from local storage when the component mounts
    const storedEntries = JSON.parse(localStorage.getItem('jerseyList') || '[]') as Entry[];
    setEntries(storedEntries);
  }, []);

  const handleAddEntry = () => {
    const newEntry: Entry = { name, jerseyNumber };
    const updatedEntries = [...entries, newEntry];

    // Save to local storage
    localStorage.setItem('jerseyList', JSON.stringify(updatedEntries));

    // Update state
    setEntries(updatedEntries);
    setName('');
    setJerseyNumber('');
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <AddForm
        name={name}
        jerseyNumber={jerseyNumber}
        setName={setName}
        setJerseyNumber={setJerseyNumber}
        handleAddEntry={handleAddEntry}
      />
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-bold mb-4">Jersey List</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{entry.name}</span>
              <span>{entry.jerseyNumber}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
