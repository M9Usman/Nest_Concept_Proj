import { Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './decorators/book.decorator';
import { Token } from './decorators/token.decorator';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  checkUp(@Book('name') name: string): string {
    return name;
  }

  @Post('/tokenDummy')
  dummyToken(@Token() token: string): string {
    try {
      console.log('Fetched Token : ', token);
      return token;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException();
    }
  }
}
