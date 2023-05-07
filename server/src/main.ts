import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function bootstrap() {
  try {
    await prisma.$connect()
    console.log('Connected to the database')
  } catch (e) {
    console.error('Error connecting to the database', e)
  } finally {
    await prisma.$disconnect()
  }

  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
