import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Author } from './author.model'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'

@Injectable()
export class AuthorService extends TypeOrmCrudService<Author> {
  constructor(@InjectRepository(Author) author) {
    super(author)
  }
}
