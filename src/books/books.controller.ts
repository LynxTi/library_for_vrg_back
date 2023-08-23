import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book,dto";
import { EditBookDto } from "./dto/edit-book.dto";

@Controller('books')
export class BooksController {

  constructor(private bookService: BooksService) {}

  @Get('getAllBook')
  getAllBook() {
    return this.bookService.getAllbooks()
  }

  @Post('createBook')
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.bookService.creteBook(createBookDto)
  }

  @Put(':id')
  editBook(@Body() editBookDto: EditBookDto, @Param('id') id: string) {
    const result = this.bookService.editBook(id, editBookDto)
    return result
  }

  @Delete(':id')
  removeBook(@Param('id') id: string) {
    return this.bookService.remove(id)
  }

  @Get(':id')
  getBooksByAuthorId (@Param('id') id: string) {
    return this.bookService.getBooksByAuthorId(id)
  }
}
// genre 64e0feeadb8320e336b771c2

//author 64e0ff2bcd134a844396cd3b