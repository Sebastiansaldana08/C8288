import mongoose, { Schema } from 'mongoose';

const WeatherSchema = new Schema({
  zip: { type: String, required: true },
  weather: { type: String, required: true },
  tempC: { type: String },
  tempF: { type: String },
  friends: [{ type: String }],
});

export default mongoose.models.Weather || mongoose.model('Weather', WeatherSchema);
