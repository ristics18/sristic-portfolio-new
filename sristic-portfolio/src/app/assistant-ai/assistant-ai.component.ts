import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assistant-ai',
  imports: [FormsModule, CommonModule],
  templateUrl: './assistant-ai.component.html',
  styleUrl: './assistant-ai.component.scss'
})
export class AssistantAiComponent {
  @ViewChild('chatBox') chatBoxRef!: ElementRef;
  @ViewChild('messageInput') messageInputRef!: ElementRef;

  message = '';
  messages: { role: 'user' | 'assistant'; content: string }[] = [
    { role: 'assistant', content: "Hi! I am here to answer questions about Srdan, let's chat!" }
  ];

  sendMessage(): void {
    const trimmed = this.message.trim();
    if (!trimmed) return;

    this.messages.push({ role: 'user', content: trimmed });
    this.message = '';
    this.autoResize();

    // Simulate AI reply (or call service)
    setTimeout(() => {
      this.messages.push({ role: 'assistant', content: "That's a great question about Srdan!" });
      this.scrollToBottom();
    }, 400);

    this.scrollToBottom();
  }

  autoResize(): void {
    const textarea = this.messageInputRef.nativeElement as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.chatBoxRef) {
        this.chatBoxRef.nativeElement.scrollTop = this.chatBoxRef.nativeElement.scrollHeight;
      }
    });
  }
}
