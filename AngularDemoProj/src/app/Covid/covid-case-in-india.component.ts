import { Component, OnInit } from '@angular/core';
import { IndiaCovidDatService } from '../Services/india-covid-data.service'


@Component({
    selector: "covid-case-in-india",
    templateUrl: "./covid-case-in-india.component.html",
    styleUrls: []

})
export class CovidCaseInIndiaComponent implements OnInit {

    covidRecordsForStates: any[] = [];
    alphaVarients:any[]= [];
    constructor(private _service: IndiaCovidDatService) { }

    ngOnInit(): void {
        this._service.getStateWiseCovidData().subscribe((data: any) => {         
            console.log(data);
           
            for(let property in data){
                //console.error(property);
                this.covidRecordsForStates.push([property, data[property]]);
                //console.log(data[property]);
                for(let state in  data[property]){
                    let alphaVarient = data[property];
                    this.alphaVarients.push(state, [alphaVarient[state]]);
                }
            }
        });

    }
}