// Funcion generica

function identidad<T>(arg: T): T {
    return arg;
  }
  
  let num = identidad<number>(10);  // num es de tipo number
  let str = identidad<string>("Hola");  // str es de tipo string

  
// Clase generica

class Caja<T> {
    private content: T;
  
    constructor(content: T) {
      this.content = content;
    }
  
    getContenido(): T {
      return this.content;
    }
  
    setContenido(content: T): void {
      this.content = content;
    }
  }
  
  const numberBox = new Caja<number>(123);
  console.log(numberBox.getContenido());  // 123
  
  const stringBox = new Caja<string>("Hola");
  console.log(stringBox.getContenido());  // Hola

  
// Interfaz generica

interface GenericInterface<T> {
    getValue(): T;
  }

  class GenericClass<T> implements GenericInterface<T> {
    private value: T;
  
    constructor(value: T) {
      this.value = value;
    }
  
    getValue(): T {
      return this.value;
    }
  }

// Generics con Restricciones

interface TieneLongitud {
    length: number;
  }
  
  function logLongitud<T extends TieneLongitud>(arg: T): void {
    console.log(arg.length);
  }
  
  logLongitud("Hola");  // 4
  logLongitud([1, 2, 3]);  // 3

  
// swap generico

function swap<T, U>(primero: T, segundo: U): [U, T] {
    return [segundo, primero];
  }
  
  const result = swap<number, string>(1, "Hello");
  console.log(result);  // ["Hello", 1]

  
// Tipos de datos genéricos

type GenericType<T> = {
    value: T;
  };

  const numGeneric: GenericType<number> = { value: 10 };

// Parámetros de tipo genéricos

function createArray<T>(length: number, value: T): Array<T> {
    return new Array(length).fill(value);
  }
  
  const numArray = createArray<number>(5, 0);

  // Parámetros de tipo genéricos con restricciones

  function createArrayWithLength<T>(length: number, value: T): Array<T> {
    if (length <= 0) {
      throw new Error("Length must be greater than zero");
    }
    return new Array(length).fill(value);
  }