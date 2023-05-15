import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import PrismaProvider from 'prisma/prisma-provider'

@Injectable()
export default abstract class GenericService {
  protected prisma: PrismaClient = PrismaProvider.getConnection()
}
