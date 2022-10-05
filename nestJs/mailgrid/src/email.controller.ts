import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

//http://localhost:3000/email/plain-text-email?toemail=actionjacks22@gmail.com
@Controller('email')
export class EmailController {
  constructor(private mailService: MailerService) {}

  @Get('plain-text-email')
  async plainTextEmail(@Query('toemail') toemail: string) {
    await this.mailService.sendMail({
      to: toemail,
      from: `${process.env.DOMAIN}`,
      subject: `Czesc jestem mail-bot. ${toemail}`,
      text: `SPAM SPAM SPAM SPAM SPAM SPAM`,
    });
    return 'success';
  }

  //http://localhost:3000/email/html-email
  @Post('html-email')
  async postHtmlEmail(@Body() payload: { jack: string; toemail: string }) {
    await this.mailService.sendMail({
      to: payload.toemail,
      from: `${process.env.DOMAIN}`,
      subject: `Czesc jestem mail-bot. ${payload.toemail}`,
      template: 'default',
      context: {
        jack: `${payload.jack}`,
      },
    });
    return 'success';
  }
}
