import { Condition } from "./current-weather-object";


export interface Forecast {
    forecastday: Forecastday[];
}

export interface Forecastday {
    date: string;	//Forecast date
    date_epoch: number; //Forecast date as unix time.
    day: Day;	//See day element
    astro: Astro;	//See astro element
    hour: Hour[];	//See hour element
}

export interface Day {
    maxtemp_c: number;       // Maximum temperature in celsius for the day.
    maxtemp_f: number;	     // Maximum temperature in fahrenheit for the day
    mintemp_c: number;		 // Minimum temperature in celsius for the day
    mintemp_f: number;		 // Minimum temperature in fahrenheit for the day
    avgtemp_c: number;		 // Average temperature in celsius for the day
    avgtemp_f: number;		 // Average temperature in fahrenheit for the day
    maxwind_mph: number;	 // Maximum wind speed in miles per hour
    maxwind_kph: number;	 // Maximum wind speed in kilometer per hour
    totalprecip_mm: number;	 // Total precipitation in milimeter
    totalprecip_in: number;	 // Total precipitation in inches
    avgvis_km: number;	// Average visibility in kilometer
    avgvis_miles: number;	// Average visibility in miles
    avghumidity: number;	// Average humidity as percentage
    condition: Condition;
    condition_text: string;	// Weather condition text
    condition_icon: string; // Weather condition ico
    condition_code: number;	// Weather condition code
    uv: number;	// UV Index
}

export interface Astro {
    sunrise: string;	//Sunrise time
    sunset: string;	//Sunset time
    moonrise: string;	//Moonrise time
    moonset: string;	//Moonset time
    // Moon phases. Value returned: New Moon, Waxing Crescen,First Quarter Waxing Gibbous,
    // Full Moon, Waning Gibbous, Last Quarter, Waning Crescent
    moon_phase: string;
    moon_illumination: number;	//Moon illumination as %
}

export interface Hour {
    time_epoch: number;	//Time as epoch
    time: string;	//Date and time
    temp_c: number;	//Temperature in celsius
    temp_f: number;	//Temperature in fahrenheit
    condition: Condition;
    condition_text: string;	// Weather condition text
    condition_icon: string; // Weather condition ico
    condition_code: number;	// Weather condition code
wind_mph: number ;	//Maximum wind speed in miles per hour
wind_kph: number;	//Maximum wind speed in kilometer per hour
wind_degree: number;	//Wind direction in degrees
wind_dir: string;	//Wind direction as 16 point compass. e.g.: NSW
pressure_mb: number;	//Pressure in millibars
pressure_in: number;	//Pressure in inches
precip_mm: number;	//Precipitation amount in millimeters
precip_in: number;	//Precipitation amount in inches
humidity: number;	//Humidity as percentage
cloud: number;	//Cloud cover as percentage
feelslike_c: number;	//Feels like temperature as celcius
feelslike_f: number;	//Feels like temperature as fahrenheit
windchill_c: number;	//Windchill temperature in celcius
windchill_f: number;	//Windchill temperature in fahrenheit
heatindex_c: number;	//Heat index in celcius
heatindex_f: number;	//Heat index in fahrenheit
dewpoint_c: number;	//Dew point in celcius
dewpoint_f: Number;	//Dew point in fahrenheit
// Will it will rain or not
will_it_rain: number;	//1 = Yes 0 = No. 
// Will it snow or not
will_it_snow: number;		//1 = Yes 0 = No
//Whether to show day condition icon or night icon
is_day: number;		//1 = Yes 0 = No
vis_km: number;		//Visibility in kilometer
vis_miles: number;		//Visibility in miles
chance_of_rain: number;		//Chance of rain as percentage
chance_of_snow: number;		//Chance of snow as percentage
gust_mph: number;		//Wind gust in miles per hour
gust_kph: number;		//Wind gust in kilometer per hour
}

