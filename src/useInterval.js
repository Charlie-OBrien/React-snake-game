import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

 
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);


  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


//hook from  Dan Abramov's 
// Making setInterval Declarative with React Hooks post 
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/