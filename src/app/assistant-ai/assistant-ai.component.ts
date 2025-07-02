import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AiChatService } from '../services/ai-chat-service';

@Component({
  selector: 'app-assistant-ai',
  standalone: true,
  templateUrl: './assistant-ai.component.html',
  styleUrl: './assistant-ai.component.scss',
  imports: [CommonModule, FormsModule]
})
export class AssistantAiComponent {
  @ViewChild('chatBox') chatBoxRef!: ElementRef;
  @ViewChild('messageInput') messageInputRef!: ElementRef;

  message = '';
  messages: { role: 'user' | 'assistant'; content: string }[] = [
    { role: 'assistant', content: "Hi! I am here to answer questions about Srđan, let's chat!" }
  ];
  message_length_max = 500;
  errorMessage = '';
  typing = false;
  isWaitingForResponse = false;

  constructor(private aiChatService: AiChatService) {}

  sendMessage(): void {
    if (this.isWaitingForResponse) return;

    const trimmed = this.message.trim();
    if (!trimmed) return;

    if (this.message.length > this.message_length_max) {
      this.errorMessage = `Message too long. Please limit to ${this.message_length_max} characters.`;
      return;
    }

    this.messages.push({ role: 'user', content: trimmed });
    const userInput = trimmed;
    this.message = '';
    this.errorMessage = '';
    this.autoResize();
    this.scrollToBottom();

    this.typing = true;
    this.isWaitingForResponse = true;

    this.aiChatService.sendMessage(userInput).subscribe({
      next: (res) => {
        const fullAnswer = res.answer.trim();
        const assistantMessage = { role: 'assistant' as const, content: '' };
        this.messages.push(assistantMessage);
        this.scrollToBottom();

        this.typing = false;
        
        // Typing animation
        let i = 0;
        const interval = setInterval(() => {
          if (i < fullAnswer.length) {
            assistantMessage.content += fullAnswer.charAt(i++);
            this.scrollToBottom();
          } else {
            clearInterval(interval);
            this.typing = false;
            this.isWaitingForResponse = false;
          }
        }, 20); // typing speed in ms
      },
      error: () => {
        this.typing = false;
        this.isWaitingForResponse = false;
        this.messages.push({ role: 'assistant', content: 'Sorry, something went wrong. Try again.' });
        this.scrollToBottom();
      }
    });
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
