import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { StudentLoginDto } from '../student/dto/student-login.dto'
import { StudentService } from '../student/student.service'
import { TutorService } from '../tutor/tutor.service'
import { TutorLoginDto } from '../tutor/dto/tutor-login.dto'
import { CreateStudentDto } from '../student/dto/create-student.dto'

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly studentService: StudentService,
    private readonly tutorService: TutorService
  ) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Student Login' })
  @Post('student/login')
  studentLogin(@Body() studentLoginDto: StudentLoginDto) {
    return this.authService.studentLogin(studentLoginDto)
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Teacher Login' })
  @Post('teacher/login')
  teacherLogin(@Body() tutorLoginDto: TutorLoginDto) {
    return this.authService.teacherLogin(tutorLoginDto)
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create Student' })
  @Post('student/register')
  studentRegister(@Body() createStudentDto: CreateStudentDto) {
    return this.authService.studentRegister(createStudentDto)
  }
}
