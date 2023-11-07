export class LocationObject{

    // Latitude in decimal degree
    lat: number = 0;

    // Longitude in decimal degree
    lon: number = 0;

    // Location name
    name: string = "";

    // Region or state of the location, if available
    region: string = "";

    // 	Location country
    country: string= "";

    // Time zone name
    tz_id : string  = "";

    // Local date and time in unix time
    localtime_epoch : number = 0;

    // Local date and time
    localtime : string = "";
}