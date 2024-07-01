import React, { useState } from 'react';
import AddForm from './AddForm';
import useFetchList from '../../Hooks/useFetchList';

const List: React.FC = () => {
  const { entries, setEntries } = useFetchList();
  const [name, setName] = useState<string>('');
  const [jerseyNumber, setJerseyNumber] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAddEntry = () => {
    // Check if jerseyNumber is already taken
    if (entries.some(entry => entry.jerseyNumber === jerseyNumber)) {
      setErrorMessage(`pag sure uy nakuna na ang ${jerseyNumber}. pag pili ug lain.`);
      return;
    }
  
    // Proceed to add the entry
    const newEntry = { name, jerseyNumber };
    const updatedEntries = [...entries, newEntry];
  
    // Save to local storage
    localStorage.setItem('jerseyList', JSON.stringify(updatedEntries));
  
    // Update state
    setEntries(updatedEntries);
    setName('');
    setJerseyNumber('');
    setErrorMessage('');
  };
  
  return (
    <div className="flex flex-col items-center h-screen">
      <AddForm
        name={name}
        jerseyNumber={jerseyNumber}
        setName={setName}
        setJerseyNumber={setJerseyNumber}
        handleAddEntry={handleAddEntry}
        errorMessage={errorMessage}
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
