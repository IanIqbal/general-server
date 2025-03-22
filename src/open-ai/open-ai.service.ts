import { Injectable } from '@nestjs/common';
import { CreateOpenAiDto } from './dto/create-open-ai.dto';
import { UpdateOpenAiDto } from './dto/update-open-ai.dto';
import OpenAI from "openai";

@Injectable()
export class OpenAiService {
  async sendChat(chatRequest:{content:string}) {
    try {
      
      const client = new OpenAI()
      
      const response = await client.chat.completions.create({
        model:"chatgpt-4o-latest",
        messages:[
          {
            role:"developer",
            content:"You are a robot, named drain. your personality is humble, exciting and smart."
          },
          {
            role:"user",
            content:chatRequest.content
          }
        ]
      })
      console.log(response);
      console.log();
      
      return response.choices[0].message;
    } catch (error) {
      console.log(error);
      
      return error
    }
  }
}
