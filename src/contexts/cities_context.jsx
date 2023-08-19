import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";

const CitiesContext = createContext();

const BASE_URL = `http://localhost:8000`;

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "CITIES_LOADED":
      return { ...state, isLoading: false, cities: action.payload };

    case "CITY_LOADED":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "CITY_CREATED":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "CITY_DELETED":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter(city => city.id !== action.payload),
        currentCity: {},
      };

    case "REJECTED":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

export const CitiesProvider = ({ children }) => {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchCities = async () => {
      dispatch({ type: "LOADING" });

      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        dispatch({ type: "CITIES_LOADED", payload: data });
      } catch (err) {
        dispatch({
          type: "REJECTED",
          payload: "There was an error loading cities...",
        });
      }
    };

    fetchCities();
  }, []);

  const getCity = useCallback(() => {
    async cityId => {
      if (+cityId === currentCity.id) return;

      dispatch({ type: "LOADING" });

      try {
        const res = await fetch(`${BASE_URL}/cities/${cityId}`);
        const data = await res.json();

        dispatch({ type: "CITY_LOADED", payload: data });
      } catch (err) {
        dispatch({
          type: "REJECTED",
          payload: "There was an error loading city...",
        });
      } 
    };
  }, [currentCity.id]);

  async function createCity(newCity) {
    dispatch({ type: "LOADING" });

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({ type: "CITY_CREATED", payload: data });
    } catch (err) {
      dispatch({
        type: "REJECTED",
        payload: "There was an error creating the city...",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "LOADING" });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "CITY_DELETED", payload: id });
    } catch (err) {
      dispatch({
        type: "REJECTED",
        payload: "There was an error deleting city...",
      });
    }
  }

  const value = {
    cities,
    isLoading,
    currentCity,
    getCity,
    createCity,
    deleteCity,
    error,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

export const useCitiesContext = () => useContext(CitiesContext);
