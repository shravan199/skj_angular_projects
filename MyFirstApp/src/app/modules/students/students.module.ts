import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDirectiveDirective } from '../../custom-directives/student-directive.directive';
import { LowerCasePipe } from '../../pipes/lower-case.pipe';



@NgModule({
  declarations: [
    StudentDirectiveDirective,
    LowerCasePipe
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
