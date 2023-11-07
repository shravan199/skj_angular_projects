import { NgModule } from '@angular/core';
import { AngularGoogleMapComponent } from "../shared/component/angular-google-map/Angular-google-map.component";
import { AgmCoreModule } from '@agm/core';



@NgModule({
    declarations: [],
    imports: [
        AgmCoreModule.forRoot({
            // apiKey: 'AIzaSyDIuBJczEsQ0rbfUGF6_QlAZhokT97Xm84',
            apiKey: 'AIzaSyBvu-SNFkZZ5XU2KcGzYgpH4-R6DUi3uyw',
            libraries: ['places']
        }),],
    providers: []
})
export class SharedModule { }
