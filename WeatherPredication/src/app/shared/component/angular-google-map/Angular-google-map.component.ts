import { Component, OnInit, NgZone, Output, ViewChild, ElementRef } from '@angular/core';
import { AgmInfoWindow, AgmMarker, MapsAPILoader } from '@agm/core';
import { CurrentWeatherComponent } from 'src/app/weather/current-weather/current-weather.component';
import { ForecastWeatherComponent } from 'src/app/weather/forecast-weather/forecast-weather.component';



@Component({
    selector: "angular-google-map",
    templateUrl: "./angular-google-map.component.html",
    styleUrls: ["./angular-google-map.component.scss"]
})
export class AngularGoogleMapComponent implements OnInit {

    lat: number = 0;
    lng: number = 0;
    zoom = 8;
    center: google.maps.LatLngLiteral = { lat: 0.0, lng: 0.0 };
    geoLoc: any;
    latLng: google.maps.LatLng = {} as google.maps.LatLng;
    showDefaultInfoWindow = true;
    openInfoWindow = true;

    // This property keeps track of selected latLng
    // We have set the default value to blank, so no details will display
    latLngLitral: string = '';

    @ViewChild('currentWeatherEleRef')
    currentWeatherCustomDOMElementRef: CurrentWeatherComponent = {} as CurrentWeatherComponent;

    @ViewChild('agmInfoWindowElementRef')
    agmInfoWindowElementRef: AgmInfoWindow = {} as AgmInfoWindow;

    @ViewChild('forecastWeatherEleRef')
    forecastWeatherEleRef: ForecastWeatherComponent = {} as ForecastWeatherComponent;

    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    }

    ngOnInit(): void {

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    console.log(position);
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                    this.zoom = 10;
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                },
                    (positionErrorCallbackData) => {
                        alert(positionErrorCallbackData.message);
                        //console.log(positionErrorCallbackData.message);
                    }
                );
            }
        });


    }

    onCenterChange() {
        this.currentWeatherCustomDOMElementRef.getCurrentWeatherInfo();
       
        this.forecastWeatherEleRef.getForecastedWeatherInfo();
    }

    onMarkerOpen() {
        //this.currentWeatherEleRef.valuechange("Marker Opened");  
    }

    markerClick(event: AgmMarker) {
        alert(`Label is: ${event.label}, iconURL is: ${event.iconUrl}, lat: ${event.latitude},
     lng: ${event.longitude}, anitmation: ${event.animation}`);
    }


    // mapClicked(map: google.maps.Map): void {
    //     map.addListener("click", () => {
    //         alert("mapClickedEvent called");
    //     });

    //     map.addListener('click', (data: any) => {
    //         this.lat = data.latLng.lat;
    //         this.lng = data.latLng.lng;
    //     })
    // }

    // mapClick(event: google.maps.MouseEvent) {
    //     //this.agmInfoWindowElementRef.open();
    //     //this.currentWeatherEleRef.onChange();
    //     // this.ngZone.run(() => {
    //     //     // Here we can get correct event
    //     //     this.lat = event.latLng.lat();
    //     //     this.lng = event.latLng.lng();
    //     //     console.log("mapReadyHandler", event.latLng.lat(), event.latLng.lng())
    //     // });
    // }


    mapReady(map: google.maps.Map) {
        let _map: google.maps.Map = map;
        let mapClickListener: google.maps.MapsEventListener;
        mapClickListener = _map.addListener('click', (e: google.maps.MouseEvent) => {
            this.ngZone.run(() => {
                // Here we c an get correct event
                this.lat = e.latLng.lat();
                this.lng = e.latLng.lng();
                this.agmInfoWindowElementRef.open();
                console.log("mapReadyHandler", e.latLng.lat(), e.latLng.lng());
            });
        });

    }

    getLatLng(): string {
        return this.lat.toString() + ',' + this.lng.toString();
    }
}