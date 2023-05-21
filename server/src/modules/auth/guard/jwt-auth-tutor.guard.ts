import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthTutorGuard extends AuthGuard('jwt-tutor') {}
