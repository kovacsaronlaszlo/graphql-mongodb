import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(name, startDate, endDate): Promise<Lesson> {
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
}
