import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item, setItem] =  React.useState(initialValue);
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
  
  
    
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName); 

          let parsedItem;

          if(!localStorageItem){
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
          }else{
              parsedItem = JSON.parse(localStorageItem);
              setItem(parsedItem);
            }


          setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
      }, 2000);
    },[ ]);

    const saveItem = (newItem)=>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error} ;
  }

  export {useLocalStorage};

  // const defaultTodos = [
//   {text : 'cortar cebolla', completed: true },
//   {text : 'tomar el curso de introduccion a js', completed: true },
//   {text : 'picar panela', completed: true },
//   {text : 'cortar carne', completed: false },
//   {text : 'comer carne', completed: false },
//   {text : 'quemar carne', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringgify(defaultTodos);
