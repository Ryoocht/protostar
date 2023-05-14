import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module'
import { StudentModule } from './modules/student/student.module'
import { TeacherModule } from './modules/teacher/teacher.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    StudentModule,
    TeacherModule,
  ],
})
export class AppModule {}
