import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ApiConfigService } from './utils/api-config-service'
import { ConfigService } from '@nestjs/config'
import OpenApi from './open-api'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const apiConfigService = new ApiConfigService(configService)

  app.setGlobalPrefix('api/v1')

  await new OpenApi(apiConfigService).handler(app)

  await app.listen(apiConfigService.applicationPort)
}
bootstrap()
