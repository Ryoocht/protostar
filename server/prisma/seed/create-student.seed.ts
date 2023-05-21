import PrismaProvider from 'prisma/prisma-provider'
import { STUDENT_DATA } from './data/student.data'

const prisma = PrismaProvider.getConnection()

async function createStudentSeedData() {
  for (const student of STUDENT_DATA) {
    await prisma.student.create({
      data: {
        ...student,
      },
    })
  }
}

export default createStudentSeedData
