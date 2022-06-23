import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    if (title && title !== 'Home') {
      document.title = `D&D - ${title}`;
    }
  }, [title]);
};

export default useTitle;
