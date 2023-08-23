import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AuthorsService } from "./authors.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { EditAuthorDto } from "./dto/edit-author.dto";
import { BooksService } from "../books/books.service";

@Controller('authors')
export class AuthorsController {
  constructor(
    private authorService: AuthorsService) {}

  @Get('getAllAuthors')
  getAllAuthors() {
    return this.authorService.getAllAuthor()
  }

  @Post('createAuthor')
  createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.createAuthor(createAuthorDto)
  }

  @Put(':id')
  editAuthor(@Body() editAuthorDto: EditAuthorDto, @Param('id') id: string) {
    const result = this.authorService.editAuthor(id, editAuthorDto)
    return result
  }

  @Delete(':id')
  removeAuthor(@Param('id') id: string) {
    // this.bookService.removeBooksByAuthorId(id)
    return this.authorService.remove(id)
  }
}
