import { Component, Input, Output, EventEmitter } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
    selector: 'employee-count',
    templateUrl: './employeeCount.component.html',
    styleUrls: ['./employeeCount.component.scss']
})
export class EmployeeCountComponent {
    @Input()
    all: number = 0;

    @Input()
    male: number = 0;

    @Input()
    female: number = 0;

    isItalic: boolean = false;
    isBold: boolean = true;

    // Holds the selected value of the radio button
    selectedRadioButtonValue: string = 'All';

    // The Output decorator makes the property an Output property
    // EventEmitter class is used to create the custom event
    // When the radio button selection changes, the selected
    // radio button value which is a string gets passed to the
    // event handler method. Hence, the event payload is string.
    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    // This method raises the custom event. We will bind this
    // method to the change event of all the 3 radio buttons
    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }


    applyStyles() {
        let styles = {
            color: 'purple',
            bold: 'true',
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal'
        }
        return styles;
    }
}