import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeFormComponent } from './resume-form/resume-form.component';

const routes: Routes = [
    {
        path: "details",
        component: ResumeFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRouting { }
