import { useState, useContext, createContext } from 'react';
import useFetch from './custom-hooks/useFetch';

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [query, setQuery] = useState('mojito');
  const { isLoading, data, count, isError } = useFetch(`s=${query}`);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const searchCocktail = (cocktail) => {
    return setQuery(cocktail);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        searchCocktail,
        query,
        isLoading,
        data,
        count,
        isError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
