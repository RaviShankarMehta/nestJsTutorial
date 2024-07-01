import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.contorller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
