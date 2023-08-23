import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type BookDocument = HydratedDocument<Book>

@Schema()
export class Book {
  @Prop({
    required: true,
    unique: true
  })
  name: String

  @Prop ({})
  authorId: string

  @Prop ({})
  authorName: string

  @Prop ({})
  genreId: string

  @Prop ({})
  genreName: string

}

export const BookSchema = SchemaFactory.createForClass(Book)