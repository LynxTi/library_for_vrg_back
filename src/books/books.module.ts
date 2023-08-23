import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Book, BookSchema } from "./book.shema";
import { Author, AuthorSchema } from "../authors/author.shema";
import { AuthorsService } from "../authors/authors.service";
import { AuthorsModule } from "../authors/authors.module";
import { Genre, GenreSchema } from "../genres/genre.shema";
import { GenresService } from "../genres/genres.service";
import { GenresModule } from "../genres/genres.module";

@Module({
  providers: [BooksService, AuthorsService, GenresService],
  controllers: [BooksController],
  imports: [
    MongooseModule.forFeature([
      {name: Book.name, schema: BookSchema},
      {name: Author.name, schema: AuthorSchema},
      {name: Genre.name, schema: GenreSchema}
    ]),
    AuthorsModule,
    GenresModule
  ]
})
export class BooksModule {}
