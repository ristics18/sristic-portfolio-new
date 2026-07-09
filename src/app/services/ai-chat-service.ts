import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api.constants';

@Injectable({ providedIn: 'root' })
export class AiChatService {
  constructor(private http: HttpClient) {}

  sendMessage(input: string, conversationId: string, recaptchaToken: string): Observable<{ answer: string, message: string }> {
    const headers = new HttpHeaders({
      'X-Recaptcha-Token': recaptchaToken
    });

    return this.http.post<{ answer: string, message: string }>(
      ApiConstants.CHAT_API,
      { input, conversationId },
      { headers }
    );
  }
}
