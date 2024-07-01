import { useState, useEffect } from 'react';

interface Entry {
  name: string;
  jerseyNumber: string;
}

const useFetchList = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const storedEntries = JSON.parse(localStorage.getItem('jerseyList') || '[]') as Entry[];
        setEntries(storedEntries);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchList();
  }, []);

  return { entries, setEntries };
};

export default useFetchList;
