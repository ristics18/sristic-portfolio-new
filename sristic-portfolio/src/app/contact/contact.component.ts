import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  generateMailtoLink(): string {
    const subject = encodeURIComponent('Subject for Srdan Ristic');
    const body = encodeURIComponent(`${this.formData.message}`);
    return `mailto:srdanristic2@gmail.com?subject=${subject}&body=${body}`;
  }
}
