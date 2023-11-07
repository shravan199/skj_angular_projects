import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appYellowBackground]'
})
export class YellowBackgroundDirective implements OnInit {

  constructor(private elementRef: ElementRef, private rendererSvc: Renderer2) { 
   // this.elementRef.nativeElement.style.backgroundColor='yellow'
    
  }
  ngOnInit(): void {
    this.rendererSvc.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow')
  }
  
  
}
