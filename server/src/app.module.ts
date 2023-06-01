import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module'
import { StudentModule } from './modules/student/student.module'
import { TutorModule } from './modules/tutor/tutor.module'
import { UserModule } from './modules/user/user.module'
import { ProfileModule } from './modules/profile/profile.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    StudentModule,
    TutorModule,
    ProfileModule,
  ],
})
export class AppModule {}
