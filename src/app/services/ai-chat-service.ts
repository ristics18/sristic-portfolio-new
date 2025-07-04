import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api.constants';

@Injectable({ providedIn: 'root' })
export class AiChatService {
  constructor(private http: HttpClient) {}

  sendMessage(input: string, conversationId: string): Observable<{ answer: string }> {
    return this.http.post<{ answer: string }>(ApiConstants.CHAT_API, { input , conversationId });
  }
}
