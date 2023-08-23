import { Body, Controller, Get, Post } from "@nestjs/common";
import { GenresService } from "./genres.service";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { Genre } from "./genre.shema";

@Controller('genre')
export class GenresController {
  constructor(private genresService: GenresService) {}
  @Get('getGenres')
  getAllGenres () {
    const result = this.genresService.getGenres()
    console.log('rezalt', result);
    return result
  }

  @Post('create')
  createGenres(@Body() createGenreDto: CreateGenreDto) {
    const result = this.genresService.addGenre(createGenreDto);
    console.log('rezalt', result);
    return result
  }
}
