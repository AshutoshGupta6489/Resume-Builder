import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {
  incrementField:boolean[];
  constructor() { }

  ngOnInit(): void {
    this.incrementField = [true];
  }
  addEduField(){
    this.incrementField.push(true);
  }
}
