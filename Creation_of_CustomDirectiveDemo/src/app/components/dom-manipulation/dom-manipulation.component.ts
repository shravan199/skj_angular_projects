import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.css']
})
export class DomManipulationComponent implements OnInit, AfterViewInit {

  @ViewChild('spanElement')
  spanElementRef: ElementRef = {} as ElementRef;

  @ViewChild('domManUsingRenderer', { static: false })
  domManUsingRendererEleRef = {} as ElementRef;

  constructor(private rendererSvc: Renderer2) {

  }



  ngOnInit(): void {

  }
 
  ngAfterViewInit(): void {
    this.spanElementRef.nativeElement.style.background = 'green';
    this.spanElementRef.nativeElement.style.color = 'white';
    this.rendererSvc.setStyle(this.domManUsingRendererEleRef.nativeElement, 'background-color', 'cyan' );
    this.rendererSvc.setProperty(this.domManUsingRendererEleRef.nativeElement, 'innerHTML', 'I am Webdeveloper- using renderer svc' );
  }

}


