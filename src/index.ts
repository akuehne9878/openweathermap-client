  import express from 'express';
  import axios from 'axios';
  import { OpenWeatherMapCurrentWeatherResponse, OpenWeatherMapForecastResponse } from './types/openweathermap';

  const app = express();
  const port = 3000;
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key

  app.get('/weather/current/:city', async (req, res) => {
    try {
      const response = await axios.get<OpenWeatherMapCurrentWeatherResponse>(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${apiKey}&units=metric`
      );
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching current weather:', error);
      res.status(500).send('Error fetching current weather');
    }
  });

  app.get('/weather/forecast/:city', async (req, res) => {
    try {
      const response = await axios.get<OpenWeatherMapForecastResponse>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&appid=${apiKey}&units=metric`
      );
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
      res.status(500).send('Error fetching weather forecast');
    }
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
