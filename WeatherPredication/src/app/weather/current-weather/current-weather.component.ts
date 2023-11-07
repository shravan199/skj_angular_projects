import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { WeatherSerivce } from '../../service/weather/weather.service';
import { LocationObject } from '../../model/weather/location-object';
import { CurrentWeatherObject } from '../../model/weather/current-weather-object';

@Component({
    selector: "current-weather",
    templateUrl: "./current-weather.component.html",
    styleUrls: ["./current-weather.component.scss"]

})
export class CurrentWeatherComponent implements OnInit {

    currentWeatherForm: FormGroup;
    listOfCity: string[];
    locationObj: LocationObject;
    currentWeatherObj: CurrentWeatherObject;
    @Input()
    latLngLitral: string = '';

    selectedLatLngValue: string = '';

    @Output()
    latLngValueChanged: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild("inputEle")
    inputEleRef: ElementRef = {} as ElementRef;
    

    constructor(private fb: FormBuilder, private weatherService: WeatherSerivce) {
        //create reactive form and controls on it
        this.currentWeatherForm = this.fb.group({
            'city': ['', Validators.required]
        });

        
        this.listOfCity = this.getListOfCity();

        this.locationObj = new LocationObject();
        this.currentWeatherObj = new CurrentWeatherObject();
    }

    ngOnInit(): void {
        console.log(this.locationObj);
        //console.log(this.currentWeatherObj);
    }

    onSubmit() {
        let city = this.currentWeatherForm.controls['city'].value;
        this.weatherService.getCurrentWeather(city).subscribe((currentWeather) => {
            console.log(currentWeather['location']);
            //console.log(currentWeather['current']);
            this.locationObj = currentWeather['location'];
            this.currentWeatherObj = currentWeather['current'];
            //console.log(this.locationObj)
        });

        // this.weatherService.getBankStatement().subscribe( (bankStmtData) => {
        //   console.log(bankStmtData);
        // });

    }

    getCurrentWeatherInfo() {
        this.weatherService.getCurrentWeatherByLatLng(this.latLngLitral)
            .subscribe((currentWeather) => {
                console.log(currentWeather['location']);
                //console.log(currentWeather['current']);
                this.locationObj = currentWeather['location'];
                this.currentWeatherObj = currentWeather['current'];
                //console.log(this.locationObj)
                console.log("Current Weather Info Retrieved Successfully")
            });
    }

    getListOfCity(): string[] {
        return Array<string>("Samastipur", "Patna", "Kota", "Darbhanga", "Paris", "New York", "California",
            "Toronto", "Dallas", "Montvale");
    }

}