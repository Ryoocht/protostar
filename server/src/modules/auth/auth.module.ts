import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { StudentModule } from '../student/student.module'
import { TutorModule } from '../tutor/tutor.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [StudentModule, TutorModule, JwtModule.registerAsync({})],
})
export class AuthModule {}
