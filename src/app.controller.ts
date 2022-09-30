import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('fascoin')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('symbol')
  async getSymbol(): Promise<string> {
    return this.appService.getSymbol();
  }

  @Get('name')
  async getName(): Promise<string> {
    return this.appService.getName();
  }

  @Get('owner')
  async getOwner(): Promise<string> {
    return this.appService.getOwner();
  }

  @Post('send')
  async sendTx(): Promise<string> {
    return this.appService.sendTransfer();
  }
}
