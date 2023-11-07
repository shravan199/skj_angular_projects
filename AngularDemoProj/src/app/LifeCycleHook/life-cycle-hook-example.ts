// Step 1 : Import OnChanges and SimpleChanges
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EMPTY } from 'rxjs';

// The selector "simple" will be used as the directive
// where we want to use this component. Notice we are
// also using the simpleInput property with interpolation
// to display the value it receives from the parent
// component
@Component({
    selector: 'life-cycle-hook-example',
    template: `You entered : {{simpleInput}} and {{simpleInput2}}`
})
export class LifeCycleHookExampleComponent implements OnChanges {
    // Input property. As and when this property changes
    // ngOnChanges life cycle hook method is called
    @Input() simpleInput: string;
    @Input() simpleInput2 : string = "";

    constructor() {
        this.simpleInput = "";
    }

    // Step 3 : Implementation for the hook method
    // This code logs the current and previous value
    // to the console.
    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            let _propertyName = changes[propertyName];
            let current = JSON.stringify(_propertyName.currentValue);
            let previous = JSON.stringify(_propertyName.previousValue);
            //console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
            console.log(`${propertyName}: currentValue = ${current}, previousValue = ${previous} `)
            // The above line can be rewritten using
            // placeholder syntax as shown below
            // console.log(`${propertyName}: currentValue = ${current }, previousValue = ${previous }`);
        }
    }
}
