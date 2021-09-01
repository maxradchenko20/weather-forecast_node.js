const rp = require('request-promise');

module.exports = async function (city = '') {
  if (!city) throw new Error('City not specified');

  const KEY = '82ae147423266d75fdbac9b22aeacb65';
  const uri = 'http://api.openweathermap.org/data/2.5/weather?q=London';

  const options = {
    uri,
    qs: {
      appid: KEY,
      q: city,
      units: 'imperial'
    },
    json: true
  }

  try {
    const data = await rp(options)
    const celsius = ((data.main.temp - 32) / 1.8).toFixed(0)

    return {
      weather: `${data.name}: ${celsius + '°'}`,
      erorr: null
    }
  } catch (erorr) {
    return {
      weather: null,
      erorr: erorr.erorr.message
    }
  }

  const response = await rp(options)
  console.log(response)
}
