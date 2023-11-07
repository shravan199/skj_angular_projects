import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appYellowBackgroud]'
})
export class YellowBackgroudDirective implements OnInit{

  constructor(private redererSvc: Renderer2, private elementRef: ElementRef) { }


  ngOnInit(): void {
   this.redererSvc.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'CyAn');
  }

}
