import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { ApiTags } from '@nestjs/swagger'
import { StudentLoginDto } from '../student/dto/student-login.dto'
import { StudentService } from '../student/student.service'
import { TutorService } from '../tutor/tutor.service'
import { TutorLoginDto } from '../tutor/dto/tutor-login.dto'

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly studentService: StudentService,
    private readonly tutorService: TutorService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('student/login')
  studentLogin(@Body() studentLoginDto: StudentLoginDto) {}

  @HttpCode(HttpStatus.OK)
  @Post('teacher/login')
  teacherLogin(@Body() tutorLoginDto: TutorLoginDto) {}
}
