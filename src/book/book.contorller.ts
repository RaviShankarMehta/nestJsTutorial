import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/bool.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAllBook')
  findAllBookService(): Book[] {
    return this.bookService.findAllBookService();
  }
  @Put('/update')
  updateBookService(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }
  @Delete('/delete/:id')
  deleteBookService(@Param('id') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }
  @Post('/addBook')
  addBookService(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
}
