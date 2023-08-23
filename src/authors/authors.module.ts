import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Author, AuthorSchema } from "./author.shema";

@Module({
  providers: [AuthorsService],
  controllers: [AuthorsController],
  imports: [
    MongooseModule.forFeature([{name: Author.name, schema: AuthorSchema} ])
  ]
})
export class AuthorsModule {}
