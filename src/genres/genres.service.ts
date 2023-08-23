import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { Genre, GenreDocument } from "./genre.shema";

@Injectable()
export class GenresService {
  
  constructor(@InjectModel(Genre.name) private readonly genreModel: Model<GenreDocument>) { }

  async getGenres(): Promise<Genre[]> {
    return this.genreModel.find().exec()
  }

  async getGenreById(id: string): Promise<Genre> {
    return this.genreModel.findById(id)
  }

  async addGenre(createGenreDto: CreateGenreDto): Promise<Genre> {
    const newGenre = new this.genreModel(createGenreDto);
    return newGenre.save()
  }
}
