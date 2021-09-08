import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateDisplayComponent } from './template-display/template-display.component';



@NgModule({
  declarations: [TemplateListComponent, TemplateDisplayComponent],
  imports: [
    CommonModule
  ]
})
export class TemplatesModule { }
