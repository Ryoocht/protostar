import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { StudentModule } from '../student/student.module'
import { TutorModule } from '../tutor/tutor.module'
import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    StudentModule,
    TutorModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_ACCESS_TOKEN_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_ACCESS_TOKEN_TIMEOUT_S')}s`,
        },
      }),
    }),
  ],
})
export class AuthModule {}
