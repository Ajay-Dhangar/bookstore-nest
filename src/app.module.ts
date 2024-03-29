import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [BooksModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
