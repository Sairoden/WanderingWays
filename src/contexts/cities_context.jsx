import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const BASE_URL = `http://localhost:8000`;

export const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (err) {
        alert("There was an error loading data...");
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  async function getCity(cityId) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${cityId}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch (err) {
      alert("There was an error loading data...");
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const value = {
    cities,
    setCities,
    isLoading,
    setIsLoading,
    currentCity,
    getCity,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

export const useCitiesContext = () => useContext(CitiesContext);
