import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Book, BookDocument } from "./book.shema";
import { Model } from "mongoose";
import { CreateBookDto } from "./dto/create-book,dto";
import { AuthorsService } from "../authors/authors.service";
import { GenresService } from "../genres/genres.service";
import { EditBookDto } from "./dto/edit-book.dto";

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private readonly bookModel: Model<BookDocument>,
              private readonly authorsServise: AuthorsService,
              private readonly genresServise: GenresService
              ) {
  }

  async getAllbooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async creteBook(createBookDto: CreateBookDto): Promise<Book> {
    const authorBook = await this.authorsServise.getAuthorById(createBookDto.authorId)
    const genreBook = await this.genresServise.getGenreById(createBookDto.genreId)

    const newBook = new this.bookModel({
      name: createBookDto.name,
      authorId: createBookDto.authorId,
      authorName: authorBook.name,
      genreId: createBookDto.genreId,
      genreName: genreBook.name
    })

    return newBook.save()
  }

  async editBook(id: string, editBookDto: EditBookDto): Promise<Book> {
    const authorBook = await this.authorsServise.getAuthorById(editBookDto.authorId)
    const genreBook = await this.genresServise.getGenreById(editBookDto.genreId)

    const editedBook = {
      name: editBookDto.name,
      authorId: editBookDto.authorId,
      authorName: authorBook.name,
      genreId: editBookDto.genreId,
      genreName: genreBook.name
    }
    return this.bookModel.findByIdAndUpdate(id, editedBook)
  }

  async remove(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id)
  }

  async getBooksByAuthorId (authorId: string): Promise<Book[]> {
    console.log('authorId', authorId);
    const books =  this.bookModel.find({ authorId }).exec()
    console.log('books', books);
    return books;
  }

  async getBooksByGenreId (genreId: string): Promise<Book[]> {
    const books =  this.bookModel.find({ genreId })
    return books;
  }

  async removeBooksByAuthorId (authorId: string): Promise<Book[]> {
    const books = await this.getBooksByAuthorId(authorId)
    if (!books) return

    for (const book of books)
      console.log('book', book);
    }
  }
