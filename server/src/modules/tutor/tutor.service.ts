import { Injectable } from '@nestjs/common'
import { CreateTeacherDto } from './dto/create-teacher.dto'
import { UpdateTeacherDto } from './dto/update-teacher.dto'
import GenericService from 'src/utils/generic-service'

@Injectable()
export class TutorService extends GenericService {
  findOneByEmail(email: string) {
    return this.prisma.tutor.findUniqueOrThrow({
      where: {
        email,
      },
    })
  }
}
