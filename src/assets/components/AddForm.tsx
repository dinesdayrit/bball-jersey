import React from 'react';

interface AddFormProps {
  name: string;
  jerseyNumber: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setJerseyNumber: React.Dispatch<React.SetStateAction<string>>;
  handleAddEntry: () => void;
  errorMessage: string;
}

const AddForm: React.FC<AddFormProps> = ({
  name,
  jerseyNumber,
  setName,
  setJerseyNumber,
  handleAddEntry,
  errorMessage,
}) => {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Add New Entry</h2>
      {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
      <div className="flex gap-4 items-center">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-100 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="jerseyNumber" className="block text-gray-100 font-bold mb-2">
          J-No.
        </label>
        <input
          type="text"
          id="jerseyNumber"
          value={jerseyNumber}
          onChange={e => setJerseyNumber(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      </div>

     <button
        onClick={handleAddEntry}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Entry
      </button>
  
    </div>
  );
};

export default AddForm;
