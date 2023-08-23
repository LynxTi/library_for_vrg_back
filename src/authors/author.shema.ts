import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Book } from "../books/book.shema";

export type AuthorDocument = HydratedDocument<Author>

@Schema()
export class Author {
  @Prop({
    required: true,
    unique: true
  })
  name: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Book" }
)
  books: Book[]
}

export const AuthorSchema = SchemaFactory.createForClass(Author)