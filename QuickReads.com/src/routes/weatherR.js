const express = require('express');
const axios = require('axios');
const weatherR = express.Router();

const getWeatherData = async () => {
  const url = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: 'jaunpur' },
    headers: {
      'X-RapidAPI-Key': '0e5929795bmsh976ddaf411d632ep15bbf6jsnef4eb60257e2',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(url);
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Call the function to fetch weather data on module import
getWeatherData();

module.exports = weatherR;
