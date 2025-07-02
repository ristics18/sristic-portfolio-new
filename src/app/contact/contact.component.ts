import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [AppConstants]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(public constants: AppConstants) {}

  generateMailtoLink(): string {
    const subject = encodeURIComponent('Subject for Srdan Ristic');
    const body = encodeURIComponent(`${this.formData.message}`);
    return `mailto:${this.constants.MY_EMAIL}?subject=${subject}&body=${body}`;
  }
}
