import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { StudentModule } from './modules/student/student.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), StudentModule],
  controllers: [AppController],
})
export class AppModule {}
