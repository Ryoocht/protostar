import { BadRequestException, Injectable } from '@nestjs/common'
import GenericService from 'src/utils/generic-service'
import HashService from 'src/utils/hash-service'
import { JwtService } from '@nestjs/jwt'
import { StudentService } from '../student/student.service'
import { TutorService } from '../tutor/tutor.service'
import { StudentLoginDto } from '../student/dto/student-login.dto'
import { TutorLoginDto } from '../tutor/dto/tutor-login.dto'

@Injectable()
export class AuthService extends GenericService {
  constructor(
    private readonly studentService: StudentService,
    private readonly tutorService: TutorService,
    private readonly jwtService: JwtService
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

  async teacherLogin(tutorLoginDto: TutorLoginDto) {
    try {
      const tutor = await this.tutorService.findOneByEmail(tutorLoginDto.email)

      const isValidPassword = await HashService.compare(
        tutorLoginDto.password,
        tutor.password
      )

      if (!isValidPassword)
        throw new BadRequestException('Invalid email or password')

      const { password, ...tutorDetails } = tutor
      return {
        details: tutorDetails,
      }
    } catch (error) {
      throw error
    }
  }
}
