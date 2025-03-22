import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { CreateOpenAiDto } from './dto/create-open-ai.dto';
import { UpdateOpenAiDto } from './dto/update-open-ai.dto';

@Controller('open-ai')
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post()
  sendChat(@Body() chatRequest: {
    content:string
  }) {
    console.log(chatRequest);
    
    return this.openAiService.sendChat(chatRequest);
  }
}
