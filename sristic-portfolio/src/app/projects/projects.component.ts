import { Component } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgIf, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [AppConstants]
})
export class ProjectsComponent {

  constructor(public constants: AppConstants) {}
}
