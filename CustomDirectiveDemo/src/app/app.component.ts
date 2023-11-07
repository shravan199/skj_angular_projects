
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
import { BehaviourSubjectService } from './services/behaviour-subject/behaviour-subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'CustomDirectiveDemo';
  _isUserLoggedIn: boolean = false;

  defaultImage = 'https://www.placecage.com/1000/1000';
  images = `https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fm=jpg 700w,
            https://images.unsplash.com/photo-1437818628339-19ded67ade8e?fm=jpg 1100w`;
  imageSrc1="https://images.dog.ceo/breeds/poodle-toy/n02113624_5584.jpg"
  imageSrc2="https://images.dog.ceo/breeds/terrier-border/n02093754_175.jpg"
  imageSrc3="https://images.dog.ceo/breeds/terrier-lakeland/n02095570_4188.jpg"
  imageSrc4="https://images.dog.ceo/breeds/keeshond/n02112350_9431.jpg"

  constructor(private AuthSvc: AuthService, private router: Router,
    public bsService: BehaviourSubjectService,
    private activatedRoute: ActivatedRoute, private titleSvc: Title, private metaService: Meta) {
    console.log('AppComponent: Constructor() called');
    console.log(`AppComponent: Constructor(): Find value of input properties: ${this._isUserLoggedIn}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent: ngOnChanges() called');
    console.log(`The Angular invokes ngOnChanges life cycle hook whenever any data-bound input property of the 
    component or directive changes`);
  }

  ngOnInit() {
    console.log('AppComponent: ngOnInit() called');
    console.log(`The Angular raises the ngOnInit hook, after it creates the component and updates its input properties.
     It raises it after the ngOnChanges hook. This hook is fired only once and immediately after its creation 
     (during the first change detection).`);
    console.log(`This is a perfect place where you want to add any initialisation logic for your component.  
     Here you have access to every input property of the component. You can use them in  http get requests to get
      the data from the back end server or run some initialization logic etc. But note that none of child components
       or projected content are available at this point. Hence any properties we decorate with @ViewChild,
        @ViewChildren , @ContentChild & @ContentChildren will not be available to use.`);

    if (this.AuthSvc.isUserLoggedIn()) {
      console.log('user is already logged in');
      this._isUserLoggedIn = this.bsService.isUserLoggedIn$.getValue();
      console.log(`Value of isUserLoggedIn$ variable : ${this.bsService.isUserLoggedIn$.getValue()}`);
      this.router.navigateByUrl('')
    } else {
      console.log('user is not logged in');
      this.router.navigateByUrl('/login');
    }

    // Dynamically update the page heading
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        var _lastActivatedRoute = this.getChild(this.activatedRoute);
        console.log(`Value of _lastActivatedRoute: ${_lastActivatedRoute}`);
        console.log(`Value of _lastActivatedRoute.data: ${_lastActivatedRoute.data}`);
        console.log(_lastActivatedRoute.data);

        _lastActivatedRoute.data.subscribe(dataObj => {
          console.log(`AppComponent.ngOnInit() value: ${dataObj}`);
          console.log(dataObj);
          console.log(dataObj['title']);
          console.log(`AppComponent.ngOnInit() value: ${dataObj}`);
          this.titleSvc.setTitle(dataObj['title']);

          //Add meta tags dynamically
           this.addMetaTags(dataObj, this.metaService)

          //url
          _lastActivatedRoute.url.subscribe((urlSigmentData) => {
            console.log('Fid urlSigmentData below:')
            console.log(urlSigmentData);
          });

          console.log(`_lastActivatedRoute.children: ${_lastActivatedRoute.children}`);
          console.log(_lastActivatedRoute.children);

          console.log(`_lastActivatedRoute.firstChild: ${_lastActivatedRoute.firstChild}`);
          console.log(_lastActivatedRoute.firstChild);

          console.log(`_lastActivatedRoute.outlet: ${_lastActivatedRoute.outlet}`);
          console.log(_lastActivatedRoute.outlet);

          console.log(`_lastActivatedRoute.component: ${_lastActivatedRoute.component}`);
          console.log(_lastActivatedRoute.component);


          console.log(`_lastActivatedRoute.fragment: ${_lastActivatedRoute.fragment}`);
          _lastActivatedRoute.fragment.subscribe((_fragment) => {
            console.log(`_lastActivatedRoute.fragment: ${_fragment}`);
            console.log(_fragment);
          })


          console.log(`_lastActivatedRoute.paramMap: ${_lastActivatedRoute.paramMap}`);
          _lastActivatedRoute.paramMap.subscribe(_paramMap => {
            console.log(_paramMap);
          })


          console.log(`_lastActivatedRoute.params: ${_lastActivatedRoute.params}`);
          _lastActivatedRoute.params.subscribe(_params => {
            console.log(_params);
          });

          console.log(`_lastActivatedRoute.parent: ${_lastActivatedRoute.parent}`);
          console.log(`_lastActivatedRoute.parent is type ActivatedRoute`)
          console.log(_lastActivatedRoute.parent);


          console.log(`_lastActivatedRoute.pathFromRoot: ${_lastActivatedRoute.pathFromRoot}`);
          console.log(`_lastActivatedRoute.parent is type ActivatedRoute[]`)
          console.log(_lastActivatedRoute.pathFromRoot);

          console.log(`_lastActivatedRoute.queryParamMap: ${_lastActivatedRoute.queryParamMap}`);
          _lastActivatedRoute.queryParamMap.subscribe((_queryParamMap) => {
            console.log(_queryParamMap);
          });


          console.log(`_lastActivatedRoute.queryParams: ${_lastActivatedRoute.queryParams}`);
          _lastActivatedRoute.queryParams.subscribe((_queryParams) => {
            console.log(_queryParams);
          });

        });
      });

  }

  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  ngDoCheck(): void {
    console.log('AppComponent: ngDoCheck() called');
    console.log(`The Angular invokes the ngDoCheck LC hook event during every change detection cycle. This hook is
     invoked even if there is no change in any of the properties Angular invokes it after the ngOnChanges & ngOnInit hooks.
     Use this hook to Implement a custom change detection, whenever Angular fails to detect the changes made to Input
      properties. This hook is particularly useful when you opt for the Onpush change detection strategy.`)
  }

  ngAfterContentInit(): void {
    console.log('AppComponent: ngAfterContentInit() called');
    console.log(`ngAfterContentInit Life cycle hook is called after the Component's projected content has been 
    fully initialized. Angular also updates the properties decorated with the ContentChild and ContentChildren 
    before raising this hook. This hook is also raised, even if there is no content to project.`)
  }

  ngAfterContentChecked(): void {
    console.log('AppComponent: ngAfterContentChecked() called');
    console.log(`ngAfterContentChecked Life cycle hook is called during every change detection cycle(cdc) after
     Angular aftter checking and updating current component's projected content. Angular also updates the properties decorated 
     with the ContentChild and ContentChildren before raising this hook. 
    Angular calls this hook even if there is no projected content in the component`);

    // if (this.AuthSvc.isUserLoggedIn()) {
    //   this._isUserLoggedIn = true;
    // }
    //this.bsService.isUserLoggedIn$.subscribe((value) => this._isUserLoggedIn = value);
    this._isUserLoggedIn = this.bsService.isUserLoggedIn$.getValue();
    console.log(`Value of isUserLoggedIn$ variable : ${this.bsService.isUserLoggedIn$.getValue()}`);
  }

  ngAfterViewInit(): void {
    console.log('AppComponent: ngAfterViewInit() called');
    console.log(`ngAfterViewInit LC hook is called after the current Component's View & all its child views are fully initialized`);
    console.log(`At this point all the lifecycle hook methods & change detection  of all child components & directives are processed & Component is completely ready `);
  }


  ngAfterViewChecked(): void {
    console.log('AppComponent: ngAfterViewChecked() called');
    console.log(`The Angular fires ngAfterViewChecked LC hook after it checks & updates the current component's views 
    and child views. This event is fired after the ngAfterViewInit and after that during every change detection cycle`);
  }

  ngOnDestroy(): void {
    console.log('AppComponent: ngOnDestroy() called');

    console.log(`This hook is called just before the Component/Directive instance is destroyed by Angular.
    We can Perform any cleanup logic for the Component here. This is the correct place where you would like to 
    Unsubscribe Observables and detach event handlers to avoid memory leaks.`);
  }


  addMetaTags(data:any, metaService: Meta){
    
    if (data.descrption) {
      this.metaService.updateTag({ name: 'description', content: data.descrption })
    } else {
      this.metaService.removeTag("name='description'")
    }

    if (data.robots) {
      this.metaService.updateTag({ name: 'robots', content: data.robots })
    } else {
      this.metaService.updateTag({ name: 'robots', content: "follow,index" })
    }

    if (data.ogUrl) {
      this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
    } else {
      this.metaService.updateTag({ property: 'og:url', content: this.router.url })
    }

    if (data.ogTitle) {
      this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
    } else {
      this.metaService.removeTag("property='og:title'")
    }

    if (data.ogDescription) {
      this.metaService.updateTag({ property: 'og:description', content: data.ogDescription })
    } else {
      this.metaService.removeTag("property='og:description'")
    }

    if (data.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: data.ogImage })
    } else {
      this.metaService.removeTag("property='og:image'")
    }

  }
}
