import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDemoProj';
  pageHeader: string = "Employee Details";
  classesToApply: string = 'italicsClass boldClass';
  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;
  isBold: boolean = true;
  isItalic: boolean = true;
  fontSize: number = 30;
  name: string = 'Shravan Kumar Jha';

  // Notice we have placed the text box in this root component
  // To keep the value in the textbox and the component property
  // value "userText" in sync we are using 2 way data binding
  // We have also bound userText property of this component
  // to the input property of the SimpleComponent
  userText: string = "Pragim";
  userText2: string = "skjhaTechnlogy";

  addClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass
    };

    return classes;
  }

  addStyles() {
    let styles = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize
    };

    return styles;
  }

  onClick(): void {
    console.log('Button Clicked');
  }
}
