import { Injectable } from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import GenericService from 'src/utils/generic-service'
import { Prisma } from '@prisma/client'
import HashService from 'src/utils/hash-service'

@Injectable()
export class StudentService extends GenericService {
  findOneByEmail(email: string) {
    return this.prisma.student.findUniqueOrThrow({
      where: {
        email,
      },
    })
  }

  async create (
    createStudentDto: CreateStudentDto,
    prismaTransaction?: Prisma.TransactionClient,
  ) {
    const hashedPassword = await HashService.hash(createStudentDto.password)

    if (prismaTransaction) {
    }
  }

  private createStudentWithTransaction(
    createStudentDto: CreateStudentDto,
    hashedPassword: string,
    prisma: Prisma.TransactionClient,
  ) {
    // const {,...studentDetails} = createStudentDto

    // return prisma.student.create({
    //   data: {
    //     ...studentDetails,

    //   }
    // })
  }
}
