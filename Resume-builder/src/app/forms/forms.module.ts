import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { FormsRouting } from './forms-routing.module';



@NgModule({
  declarations: [ResumeFormComponent],
  imports: [
    CommonModule,
    FormsRouting
  ]
})
export class FormsModule { }
