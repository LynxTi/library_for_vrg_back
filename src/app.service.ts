import { Injectable } from "@nestjs/common";


@Injectable()
export class AppService {

  getAllGenres() {
    return [
      { id: 1, name: 'fantasy' }
    ]
  }
}