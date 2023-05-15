import { Injectable } from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import GenericService from 'src/utils/generic-service'

@Injectable()
export class StudentService extends GenericService {
  findOneByEmail(email: string) {
    return this.prisma.student.findUniqueOrThrow({
      where: {
        email,
      },
    })
  }
}
