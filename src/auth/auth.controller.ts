import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('api/v1/auth')

export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return { message: 'I am signup' };
  }

  @Post('signin')
  signin(){
    return { message: 'I am signin' };
  }
}