import PrismaProvider from 'prisma/prisma-provider'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { ExtractJwt } from 'passport-jwt'
import { PrismaClient } from '@prisma/client'
import { JwtTokenAccessEnum } from '../types/auth-type.type'
import { UserService } from 'src/modules/user/user.service'

@Injectable()
export class JwtStudentStrategy extends PassportStrategy(
  Strategy,
  'jwt-student'
) {
  protected prisma: PrismaClient = PrismaProvider.getConnection()

  constructor(
    configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_ACCESS_TOKEN_SECRET'),
    })
  }

  async validate(payload: { id: string; type: JwtTokenAccessEnum }) {
    const student = await this.userService.findOneByEmail(payload.id)

    if (!student || payload.type !== JwtTokenAccessEnum.STUDENT)
      throw new UnauthorizedException()

    const { password, ...studentDetails } = student
    return studentDetails
  }
}
