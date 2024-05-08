import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientChatContent } from './client-chat-content';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  constructor(private httpClient: HttpClient) { }

  chat(chatContent: ClientChatContent): Observable<ClientChatContent> {
    return this.httpClient.post<ClientChatContent>('https://api.ghostai.me/api/chat', chatContent);
  }

  generateText(message: string): Observable<ClientChatContent> {
    return this.httpClient.post<ClientChatContent>('https://api.ghostai.me/api/text', {message});
  }
  
  vision(message: string, file: File): Observable<ClientChatContent> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('message', message);
    return this.httpClient.post<ClientChatContent>('https://api.ghostai.me/api/vision', formData);
  }
}
