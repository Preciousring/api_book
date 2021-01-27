import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorModule } from './author/author.module'
import { BookModule } from './book/book.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'hattie.db.elephantsql.com',
      port: 5432,
      username: 'yfsnkwfu',
      password: 'LV0NYPsli2SOd8j8iLd_h2ZryrKase9h',
      database: 'yfsnkwfu',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    AuthorModule,
    BookModule,
  ],
  controllers: [],
})
export class AppModule {}