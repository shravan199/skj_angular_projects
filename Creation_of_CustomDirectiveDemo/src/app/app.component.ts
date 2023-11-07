import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ViewChildAndViewChildernQueryListDemoComponent } from './components/view-child-and-view-childern-query-list-demo/view-child-and-view-childern-query-list-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  name = "";
  languageText: string = 'English';
  language: string = "en-US";
  title = 'Creation_of_CustomDirectiveDemo';
  showCounter: boolean = false;
  name2 = 'shravan';

  @ViewChild(ViewChildAndViewChildernQueryListDemoComponent, { static: false })
  childComponent = {} as ViewChildAndViewChildernQueryListDemoComponent;

  @ViewChild("name2inputElmnt", { static: false, read: NgModel })
  name2inputElmntRef = {} as ElementRef;

  @ViewChild('name2inputElmnt', { static: false, read: NgModel })
  inRef = {} as Input;

  @ViewChild('name2inputElmnt', { static: false, read: ElementRef })
  elRef = {} as ElementRef;

  @ViewChild('name2inputElmnt', { static: false, read: ViewContainerRef })
  vcRef = {} as ViewContainerRef;

  firstName = 'shravan';
  middleName = 'kumar';
  lastName = 'jha';

  @ViewChildren(NgModel)
  modelRefList = {} as QueryList<NgModel>;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en-US');
    this.translateService.use('en-US');
    // this.childComponent.increment();
  }

  ngAfterViewInit(): void {
    // this.childComponent.increment();
  }

  ngOnInit(): void {
    this.translateText();
  }

  onInputChange() {
    this.name2 = 'Jyoti';
  }

  onChange(event: any) {
    const language = this.language;
    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
    this.translateText();
    this.languageText = event.target.options[event.target.options.selectedIndex].text;
  }

  show() {
    this.modelRefList.forEach(element => {
      console.log(element)
      //console.log(element.value)
    });
  }


  incrementCount() {
    this.childComponent.increment();
  }

  decrementCount() {
    this.childComponent.decrament();
  }

  translateText() {
    this.translateService.get("angular").subscribe((text: string) => {
      this.name = text;
    });
  }

}
