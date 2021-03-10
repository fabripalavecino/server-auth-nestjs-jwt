import { Controller, Post, Req, UseGuards } from '@nestjs/common';

import { Request } from 'express';
import { User } from 'src/users/models/user';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('login')
  login(@Req() req: Request): { access_token: string } {
    return this.authService.login(req.user as User);
  }
}
