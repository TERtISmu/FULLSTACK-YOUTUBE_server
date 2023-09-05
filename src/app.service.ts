import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bro!';
  }

  getProfile(): string {
    return 'Profile';
  }
}
