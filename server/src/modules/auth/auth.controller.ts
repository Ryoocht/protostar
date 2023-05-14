import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { ApiTags } from '@nestjs/swagger'
import { StudentLoginDto } from '../student/dto/student-login.dto'
import { StudentService } from '../student/student.service'
import { TeacherService } from '../teacher/teacher.service'

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly studentService: StudentService,
    private readonly teacherService: TeacherService
  ) {}

  @Post('student/login')
  studentLogin(@Body() studentLoginDto: StudentLoginDto) {}
}
