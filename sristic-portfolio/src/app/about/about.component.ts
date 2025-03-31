import { Component } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  providers: [AppConstants]
})
export class AboutComponent {
  constructor(public constants: AppConstants) {}
}
