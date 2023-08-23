import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Genre, GenreSchema } from "./genre.shema";

@Module({
  providers: [GenresService],
  controllers: [GenresController],
  imports: [
    MongooseModule.forFeature([{name: Genre.name, schema: GenreSchema}])]
})
export class GenresModule {}
