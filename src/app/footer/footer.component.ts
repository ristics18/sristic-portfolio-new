import { Component } from '@angular/core';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [AppConstants]
})
export class FooterComponent {
  readonly COPYRIGHT = "Copyright © " + new Date().getFullYear() + " - Srđan Ristić";

  constructor(public constants: AppConstants) { this.COPYRIGHT = this.constants.COPYRIGHT; }
}
