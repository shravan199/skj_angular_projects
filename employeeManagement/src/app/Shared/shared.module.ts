import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    // At the moment we do not have any components in this SharedModule
    // that require directives of CommonModule or ReactiveFormsModule
    // So we did not include them here in the imports array. We can
    // export a module without importing it first
    declarations: [],
    // Our Employee s requires the CommonModule directives
    // such as ngIf, ngFor etc. Similarly, Employee FeatureModule also
    // requires ReactiveFormsModule directives. So export CommonModule
    // and ReactiveFormsModule.
    imports: [

    ],
    exports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }