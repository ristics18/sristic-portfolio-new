import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly CURRENT_YEAR = new Date().getFullYear();
  readonly YEARS_OF_EXPERIENCE = new Date().getFullYear() - 2018;
}
