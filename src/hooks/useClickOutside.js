import React from 'react';

export const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    console.log(ref);
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};
