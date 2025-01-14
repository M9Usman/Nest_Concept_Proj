import { IsNotEmpty } from 'class-validator';

export class BookDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  author: string;
}
