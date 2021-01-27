import {IsString} from 'class-validator';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Book } from '../book/book.model'
import { ApiProperty } from '@nestjs/swagger'


@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  authorId: number;

  @Column()
  @IsString()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column({
    nullable: true,
  })
  avatarURL: string

  @ApiProperty({ type: () => Book })
  @OneToMany(
    () => Book,
    book => book.author,
  )
  books: Book[]

}