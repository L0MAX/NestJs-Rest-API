import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  signin() {
    return "Login";
  }

  signup() {  
    return "Signup";
  }
}