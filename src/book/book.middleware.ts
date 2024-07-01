import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BookMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let protocol = req.protocol;
    let url = req.originalUrl;
    let host = req.get('host');
    let method = req.method;
    let date = new Date().toDateString();
    console.log(protocol + '://' + host + url + ' ' + method + '' + date);
    next();
    // throw new Error('Method not implemented');
  }
}
