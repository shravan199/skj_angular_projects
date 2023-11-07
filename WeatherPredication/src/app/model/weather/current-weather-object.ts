

export class Condition {
  code: number = 0; //Weather condition unique code.
  text: string = ""; //Weather condition text like mist, hot, chill etc.
  icon: string = ""; //Weather icon url
}

export class CurrentWeatherObject extends Condition {
  // Local time when the real time data was updated.
  last_updated: string = "";

  //Local time when the real time data was updated in unix time
  last_updated_epoch: number = 0;

  // Temperature in celsius
  temp_c: number = 0;

  // Temperature in fahrenheit
  temp_f: number = 0;

  // Feels like temperature in celsius
  feelslike_c: number = 0;

  // Feels like temperature in fahrenheit
  feelslike_f: number = 0;

  condition: Condition = new Condition();

  // Wind speed in miles per hour
  wind_mph: number = 0;

  // Wind speed in kilometer per hour
  wind_kph: number = 0;

  //Wind direction in degrees
  wind_degree: number = 0;

  //Wind direction as 16 point compass. e.g.: NSW
  wind_dir: string = "";

  // Pressure in millibars
  pressure_mb: number = 0;

  // Pressure in inches
  pressure_in: number = 0;

  // Precipitation amount in millimeters
  precip_mm: number = 0;

  // Precipitation amount in inches
  precip_in: number = 0;

  // Humidity as percentage
  humidity: number = 0;

  // Cloud cover as percentage
  cloud: number = 0;

  //1 = Yes 0 = No - Whether to show day condition icon or night icon
  is_day: number = 0;

  //UV Index
  uv: number = 0;

  //Wind gust in miles per hour
  gust_mph: number = 0;

  // Wind gust in kilometer per hour
  gust_kph: number = 0;

}

