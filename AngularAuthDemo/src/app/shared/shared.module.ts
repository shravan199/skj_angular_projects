import { CommonModule } from '@angular/common';
import {NgModule}  from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
    declarations: [PageNotFoundComponent, HeaderComponent],
    imports:[CommonModule],
    providers:[],
    exports: [PageNotFoundComponent, HeaderComponent]
})
export class SharedModule{}