import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './studen-input.dto';
import { StudentService } from './student.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
