import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { TutorService } from '../tutor/tutor.service'
import { TutorLoginDto } from '../tutor/dto/tutor-login.dto'
import { StudentService } from '../student/student.service'
import { CreateTutorDto } from '../tutor/dto/create-tutor.dto'
import { StudentLoginDto } from '../student/dto/student-login.dto'
import { CreateStudentDto } from '../student/dto/create-student.dto'
import { JwtTokenAccessEnum } from './types/auth-type.type'
import GenericService from 'src/utils/generic-service'
import HashService from 'src/utils/hash-service'

@Injectable()
export class AuthService extends GenericService {
  constructor(
    private readonly userService: UserService,
    private readonly studentService: StudentService,
    private readonly tutorService: TutorService,
    private readonly jwtService: JwtService
  ) {
    super()
  }

  async studentLogin(studentLoginDto: StudentLoginDto) {
    try {
      const user = await this.userService.findOneByEmail(studentLoginDto.email)

      const isValidPassword = await HashService.compare(
        studentLoginDto.password,
        user.password
      )

      if (!isValidPassword)
        throw new BadRequestException('Invalid email or password')

      const { password, ...userDetails } = user
      return {
        jwtToken: this.jwtService.sign({
          id: user.id,
          type: JwtTokenAccessEnum.STUDENT,
        }),
        details: userDetails,
      }
    } catch (error) {
      throw error
    }
  }

  async tutorLogin(tutorLoginDto: TutorLoginDto) {
    try {
      const user = await this.userService.findOneByEmail(tutorLoginDto.email)

      const isValidPassword = await HashService.compare(
        tutorLoginDto.password,
        user.password
      )

      if (!isValidPassword)
        throw new BadRequestException('Invalid email or password')

      const { password, ...userDetails } = user
      return {
        jwtToken: this.jwtService.sign({
          id: user.id,
          type: JwtTokenAccessEnum.TUTOR,
        }),
        details: userDetails,
      }
    } catch (error) {
      throw error
    }
  }

  async studentRegister(createStudentDto: CreateStudentDto) {
    return await this.prisma.$transaction(async tx => {
      //const {password, ...studentDetails} = await this.studentService
    })
  }

  async tutorRegister(createTutorDto: CreateTutorDto) {
    return ''
  }
}
