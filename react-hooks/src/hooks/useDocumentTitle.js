import { useEffect } from 'react';

//custom hook
export const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Count-${count}`;
  }, [count]);
};
