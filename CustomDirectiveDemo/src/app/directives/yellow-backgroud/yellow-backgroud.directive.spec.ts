import { ElementRef, Renderer2 } from '@angular/core';
import { YellowBackgroudDirective} from './yellow-backgroud.directive';

 let redererSvc = {} as Renderer2;
let elementRef = {} as ElementRef;
describe('YellowBackgroudDirective', () => {
  it('should create an instance', () => {
    const directive = new YellowBackgroudDirective(redererSvc, elementRef);
    expect(directive).toBeTruthy();
  });
});
