import { WeatherInterface } from "../mongoose/weather/interface";
import { findByZip, updateByZip, deleteWeather } from "../mongoose/weather/services";

export const resolvers = {
  Query: {
    weather: async (_: any, param: WeatherInterface) => {
      const data = await findByZip(param.zip);
      return [data];
    },
  },
  Mutation: {
    weather: async (_: any, param: { data: WeatherInterface }) => {
      await updateByZip(param.data.zip, param.data);
      const data = await findByZip(param.data.zip);
      return [data];
    },
    deleteWeather: async (_: any, { zip }: { zip: string }) => {
      return await deleteWeather(zip);
    },
  },
};
