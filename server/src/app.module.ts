import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module'
import { StudentModule } from './modules/student/student.module'
import { TutorModule } from './modules/tutor/tutor.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    StudentModule,
    TutorModule,
  ],
})
export class AppModule {}
