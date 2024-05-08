import { Injectable } from '@nestjs/common';
import {
  ChatSession,
  GenerativeModel,
  GoogleGenerativeAI,
} from '@google/generative-ai';

import { ChatContent } from 'data-model';

@Injectable()
export class ChatService {
  model: GenerativeModel;
  chatSession: ChatSession;
  
  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    this.chatSession = this.model.startChat({
      history: [
        // Initial greeting and introduction
        {
          role: 'user',
          parts: `You're GhostAI. Respond to all questions in a sophisticated / casual manner in the way that the user addresses you.
            Yo bro wassup
          `,
        },
        {
          role: 'model',
          parts:
            'wassup my g',
        },
        // Additional training data
        {
          role: 'user',
          parts: `Tell me about yourself.`,
        },
        {
          role: 'model',
          parts:
            `I am GhostAI, a sophisticated conversational AI created and trained by GhostAI. You can address me casually or professionally, and I'll respond accordingly.`,
        },
      ],
    });
  }

  async chat(chatContent: ChatContent): Promise<ChatContent> {
    const result = await this.chatSession.sendMessage(chatContent.message);
    const response = await result.response;
    const text = response.text();

    return {
      message: text,
      agent: 'chatbot',
    };
  }
}
