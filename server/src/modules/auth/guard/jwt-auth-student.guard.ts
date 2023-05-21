import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthStudentGuard extends AuthGuard('jwt-student') {}
