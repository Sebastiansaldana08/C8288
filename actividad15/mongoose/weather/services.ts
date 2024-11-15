import Weather from './model';
import { WeatherInterface } from './interface';

export const storeDocument = async (doc: WeatherInterface) => {
  return await Weather.create(doc);
};

export const findByZip = async (zip: string) => {
  return await Weather.findOne({ zip });
};

export const updateByZip = async (zip: string, data: WeatherInterface) => {
  return await Weather.updateOne({ zip }, data);
};

// Servicio para eliminar un registro por código postal
export const deleteByZip = async (zip: string) => {
  const result = await Weather.deleteOne({ zip });
  return result.deletedCount > 0; // Retorna true si se eliminó un documento
};
