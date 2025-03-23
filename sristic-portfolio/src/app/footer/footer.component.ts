import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly COPYRIGHT = "Copyright © 2025 - " + new Date().getFullYear() + " - Srdan Ristic";
}
