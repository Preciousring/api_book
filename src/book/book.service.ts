import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Book } from './book.model'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class BookService extends TypeOrmCrudService<Book> {
  constructor(@InjectRepository(Book) book: Repository<Book>) {
    super(book)
  }
}