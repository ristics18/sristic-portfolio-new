import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  providers: [AppConstants]
})
export class NavComponent {

  constructor(public constants: AppConstants) {}

}
