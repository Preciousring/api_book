import { Controller } from '@nestjs/common'
import { AuthorService } from './author.service'
import { Author } from './author.model'
import { Crud } from '@nestjsx/crud'
import { ApiTags } from '@nestjs/swagger'

@Crud({
  model: {
    type: Author,
  },
  query: {
    join: {
      books: {
        eager: true,
      },
    },
  },
})
@ApiTags('authors')
@Controller('authors')
export class AuthorController {
  constructor(private readonly service: AuthorService) {}
}
