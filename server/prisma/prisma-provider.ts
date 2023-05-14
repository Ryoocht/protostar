import { ApiConfigService } from 'src/utils/api-config-service'
import PrismaConnection from './prisma-connection'
import { ConfigService } from '@nestjs/config'

export default abstract class PrismaProvider {
  private static prismaConnection: PrismaConnection

  static getConnection() {
    if (!this.prismaConnection) {
      this.prismaConnection = new PrismaConnection(
        new ApiConfigService(new ConfigService())
      )
    }
    return this.prismaConnection
  }
}
