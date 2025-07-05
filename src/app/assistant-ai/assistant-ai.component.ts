import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AiChatService } from '../services/ai-chat-service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-assistant-ai',
  standalone: true,
  templateUrl: './assistant-ai.component.html',
  styleUrl: './assistant-ai.component.scss',
  imports: [CommonModule, FormsModule],
  providers: [AppConstants]
})
export class AssistantAiComponent {
  @ViewChild('chatBox') chatBoxRef!: ElementRef;
  @ViewChild('messageInput') messageInputRef!: ElementRef;
  @ViewChild('chatContainer') chatContainer!: ElementRef;

  message = '';
  messages: { role: 'user' | 'assistant'; content: string }[] = [
    { role: 'assistant', content: "Hi! I am here to answer questions about Srdjan, let's chat!" }
  ];
  message_length_max = 500;
  errorMessage = '';
  typing = false;
  isWaitingForResponse = false;
  hasStartedChat = false;
  conversationId = '';

  constructor(private aiChatService: AiChatService, public constants: AppConstants) {}

  ngOnInit(): void {
    this.conversationId = crypto.randomUUID();
  }

  sendMessage(): void {
    if (this.isWaitingForResponse) return;

    const trimmed = this.message.trim();
    if (!trimmed) return;

    if (this.message.length > this.message_length_max) {
      this.errorMessage = `Message too long. Please limit to ${this.message_length_max} characters.`;
      return;
    }

    this.hasStartedChat = true;
    setTimeout(() => {
      this.chatContainer?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);

    this.messages.push({ role: 'user', content: trimmed });
    const userInput = trimmed;
    this.message = '';
    this.errorMessage = '';
    this.autoResize();
    this.scrollToBottom();

    this.typing = true;
    this.isWaitingForResponse = true;

    this.aiChatService.sendMessage(userInput, this.conversationId).subscribe({
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
