import { ElementRef, Renderer2 } from '@angular/core';
import { YellowBackgroundDirective } from './yellow-background.directive';
var elemeref = {} as ElementRef;
var rendererSvc = {} as Renderer2;
describe('YellowBackgroundDirective', () => {
  it('should create an instance', () => {
    const directive = new YellowBackgroundDirective( elemeref, rendererSvc);
    expect(directive).toBeTruthy();
  });
});
