import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(createLEssonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLEssonInput;
    const lesson = this.lessonRepository.create({
      id: randomUUID(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }

  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ where: { id } });
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }
}
