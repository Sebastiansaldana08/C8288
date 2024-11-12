// Definición del tipo ValidationError
type ValidationError = {
    message: string;
  };
  
  // Función que valida el código postal
  function validateZipcode(zipcode: string): ValidationError | null {
    if (zipcode.length !== 5 || isNaN(Number(zipcode))) {
      return { message: 'Código postal no válido. Debe tener 5 dígitos.' };
    }
    return null;
  }
  
  // Ejemplo de uso
  console.log(validateZipcode('12345'));  // null (válido)
  console.log(validateZipcode('1234a'));  // { message: 'Código postal no válido...' }
  