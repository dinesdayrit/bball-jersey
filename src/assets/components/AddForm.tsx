import React from 'react';

interface AddFormProps {
  name: string;
  jerseyNumber: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setJerseyNumber: React.Dispatch<React.SetStateAction<string>>;
  handleAddEntry: () => void;
}

const AddForm: React.FC<AddFormProps> = ({
  name,
  jerseyNumber,
  setName,
  setJerseyNumber,
  handleAddEntry,
}) => {
  const isFormValid = () => {
    return name.trim() !== '' && jerseyNumber.trim() !== '';
  };

  return (
    <div className="flex flex-row gap-2 mb-4">
      <div className="flex flex-col justify-center">
        <label htmlFor="name" className="block text-gray-100 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col justify-center">
        <label htmlFor="jerseyNumber" className="block text-gray-100 font-bold mb-2">
          J-no:
        </label>
        <input
          type="number"
          id="jerseyNumber"
          name="jerseyNumber"
          value={jerseyNumber}
          onChange={(e) => setJerseyNumber(e.target.value)}
          className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex items-end">
        <button
          type="button"
          onClick={handleAddEntry}
          disabled={!isFormValid()} // Disable button if form is not valid
          className={`bg-green-600 text-white px-4 py-2 rounded-lg ${
            !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddForm;
