import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import GenericService from 'src/utils/generic-service'
import { StudentService } from '../student/student.service'
import { TeacherService } from '../teacher/teacher.service'
import { StudentLoginDto } from '../student/dto/student-login.dto'
import HashService from 'src/utils/hash-service'

@Injectable()
export class AuthService extends GenericService {
  constructor(
    private readonly studentService: StudentService,
    private readonly teacherService: TeacherService
  ) {
    super()
  }

  async studentLogin(studentLoginDto: StudentLoginDto) {
    try {
      const student = await this.studentService.findOneByEmail(
        studentLoginDto.email
      )

      const isValidPassword = await HashService.compare(
        studentLoginDto.password,
        student.password
      )

      if (!isValidPassword)
        throw new BadRequestException('Invalid email or password')

      const { password, ...studentDetails } = student
      return {
        details: studentDetails,
      }
    } catch (error) {
      throw error
    }
  }
}
