import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api.constants';

@Injectable({ providedIn: 'root' })
export class AiChatService {
  constructor(private http: HttpClient) {}

  sendMessage(input: string, conversationId: string, recaptchaToken: string): Observable<{ answer: string }> {
    const headers = new HttpHeaders({
      'X-Recaptcha-Token': recaptchaToken
    });

    return this.http.post<{ answer: string }>(
      ApiConstants.CHAT_API,
      { input, conversationId },
      { headers }
    );
  }
}
