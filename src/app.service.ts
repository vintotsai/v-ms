import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  createUser(payload: any) {
    console.log('payload>>>', payload);
    return payload;
  }
}
