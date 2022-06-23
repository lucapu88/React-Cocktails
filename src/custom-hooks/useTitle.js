import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    if (title && title !== 'Home') {
      document.title = `D&D - ${title}`;
    } else {
      document.title = 'Drink & Drunk';
    }
  }, [title]);
};

export default useTitle;
