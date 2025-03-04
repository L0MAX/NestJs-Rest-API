import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  signin() {
    return { message: 'I have signin' };
  }

  signup() {  
    return { message: 'I have signup' };
  }
}