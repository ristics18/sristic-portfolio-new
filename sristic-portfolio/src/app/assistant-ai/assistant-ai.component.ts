import { Component } from '@angular/core';

@Component({
  selector: 'app-assistant-ai',
  imports: [],
  templateUrl: './assistant-ai.component.html',
  styleUrl: './assistant-ai.component.scss'
})
export class AssistantAiComponent {
  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
