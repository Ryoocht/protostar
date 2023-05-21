import PrismaProvider from 'prisma/prisma-provider'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { PrismaClient } from '@prisma/client'
import { ExtractJwt } from 'passport-jwt'
import { Strategy } from 'passport-local'
import { TutorService } from 'src/modules/tutor/tutor.service'
import { JwtTokenAccessEnum } from '../types/auth-type.type'

@Injectable()
export class JwtTutorStrategy extends PassportStrategy(Strategy, 'jwt-tutor') {
  protected prisma: PrismaClient = PrismaProvider.getConnection()

  constructor(
    configService: ConfigService,
    private readonly tutorService: TutorService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExiration: false,
      secretOrKey: configService.get('JWT_ACCESS_TOKEN_SECRET'),
    })
  }

  async validate(payload: { id: string; type: JwtTokenAccessEnum }) {
    const tutor = await this.tutorService.findOneByEmail(payload.id)

    if (!tutor || payload.type !== JwtTokenAccessEnum.TUTOR)
      throw new UnauthorizedException()

    const { password, ...tutorDetails } = tutor
    return tutorDetails
  }
}
