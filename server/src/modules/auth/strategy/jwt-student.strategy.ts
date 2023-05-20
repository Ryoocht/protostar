import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { ExtractJwt } from 'passport-jwt'
import { PrismaClient } from '@prisma/client'
import PrismaProvider from 'prisma/prisma-provider'
import { StudentService } from 'src/modules/student/student.service'

@Injectable()
export class JwtStudentStrategy extends PassportStrategy(
  Strategy,
  'jwt-student'
) {
  protected prisma: PrismaClient = PrismaProvider.getConnection()

  constructor(configService: ConfigService, private readonly studentService: StudentService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_ACCESS_TOKEN_SECRET'),
    })
  }

  async validate(payload: {sub: string, email: string}) {
    // const student = await 
  }
}
