import { Component } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [AppConstants]
})
export class HomeComponent {

  constructor(public constants: AppConstants) {}
}
