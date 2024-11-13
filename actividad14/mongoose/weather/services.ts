import Weather from './model';

export const findByZip = async (zip: string) => {
  return await Weather.findOne({ zip });
};

export const updateByZip = async (zip: string, data: any) => {
  return await Weather.findOneAndUpdate({ zip }, data, { new: true });
};

// Servicio para eliminar un registro por código postal
export const deleteWeather = async (zip: string) => {
  const result = await Weather.deleteOne({ zip });
  return result.deletedCount > 0; // Retorna true si se eliminó un documento
};
