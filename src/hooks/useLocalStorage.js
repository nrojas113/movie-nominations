import { useState, useEffect } from "react";

//create custom hook for local storage

const useLocalStorage = (key, initialValue) => {
  //used in App.js - key='nominations', initialValue=[]
  const [value, setValue] = useState(() => {
    //for useState's initial state, by passing argument (not value)
    //this will only be executed only on the initial render
    try {
      const localValue = window.localStorage.getItem(key);
      //if local storage has value stored, parse it & return the value
      //if local storage is empty, return initial value (empty array)
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  //save book info to local storage (as string) if key or value (nominations array) changes
  //when new book is added to nominations array, then below is executed (store it to local storage)
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  //this is same as [nominations, setNominations] -> defined in App.js
  return [value, setValue];
};

export default useLocalStorage;
