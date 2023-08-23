import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Author, AuthorDocument } from "./author.shema";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { Model } from "mongoose";
import { EditAuthorDto } from "./dto/edit-author.dto";

@Injectable()
export class AuthorsService {

    constructor(@InjectModel(Author.name) private readonly authorModel: Model<AuthorDocument>,) {}

    async getAllAuthor(): Promise<Author[]> {
      return this.authorModel.find().exec()
    }

    async createAuthor(creteAuthorDto: CreateAuthorDto): Promise<Author> {
      const newAuthor = new this.authorModel(creteAuthorDto);
      return newAuthor.save();
    }

    async editAuthor(id: string, editAuthorDto: EditAuthorDto): Promise<Author> {
      return this.authorModel.findByIdAndUpdate(id, editAuthorDto)
    }

    async remove(id: string): Promise<Author> {
      return this.authorModel.findByIdAndRemove(id)
    }

    async getAuthorById(id: string): Promise<Author> {
      return this.authorModel.findById(id);
    }
}
