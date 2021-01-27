import { PrimaryGeneratedColumn } from "typeorm";

import {Entity, Column, ManyToOne } from 'typeorm';
import {IsDate, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'
import { Author } from '../author/author.model'


@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  bookId: number;

  @Column()
  @IsString()
  title: string;

  @Column()
  authorId: string;

  @Column()
  price: number;

  @Column()
  iban: string;

  @Column()
  @IsDate()
  publishedAt: Date;

  @ApiProperty({ type: () => Author })
  @ManyToOne(
    () => Author,
    author => author.books,
    {
      onDelete: 'CASCADE',
    },
  )
  author: Author
}
