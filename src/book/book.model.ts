import { PrimaryGeneratedColumn } from "typeorm";

import {Entity, Column, ManyToOne } from 'typeorm';
import {IsDate, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'
import { Author } from '../author/author.model'


@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  title: string;

  @Column()
  price: number;

  @Column()
  iban: string;


  @Column()
  publishedAt: string;

  @ApiProperty({ type: () => Author })
  @ManyToOne(
    type => Author,
    author => author.books,
    {
      onDelete: 'CASCADE',
    },
  )
  author: Author
}
