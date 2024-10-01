
// Hook Genérico

function useArray<T>(initialArray: T[]): [T[], (item: T) => void, (item: T) => void] {
    const [array, setArray] = React.useState<T[]>(initialArray);
  
    const addItem = (item: T) => {
      setArray([...array, item]);
    };
  
    const removeItem = (item: T) => {
      setArray(array.filter(i => i !== item));
    };
  
    return [array, addItem, removeItem];
  }
  
  const [fruits, addFruit, removeFruit] = useArray<string>(["Apple", "Banana"]);
  addFruit("Orange");
  console.log(fruits);  // ["Apple", "Banana", "Orange"]

  
// Hook de Estado con un Objeto

function useObject(initialObject: { [key: string]: any }): [typeof initialObject, (key: string, value: any) => void] {
    const [object, setObject] = React.useState<typeof initialObject>(initialObject);
  
    const handleChange = (key: string, value: any) => {
      setObject({ ...object, [key]: value });
    };
  
    return [object, handleChange];
  }

