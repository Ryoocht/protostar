import { Module } from '@nestjs/common'
import { TutorService } from './tutor.service'
import { TutorController } from './tutor.controller'

@Module({
  exports: [TutorService],
  controllers: [TutorController],
  providers: [TutorService],
})
export class TutorModule {}
