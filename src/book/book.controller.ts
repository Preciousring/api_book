import { Controller } from '@nestjs/common'
import { BookService } from './book.service'
import { Book } from './book.model'
import { Crud } from '@nestjsx/crud'
import { ApiTags } from '@nestjs/swagger'

@Crud({
  model: {
    type: Book,
  },
  query: {
    join: {
      author: {
        eager: true,
        exclude: ['avatarURL'],
      },
    },
  },
})
@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(public service: BookService) {}
}