import { INestApplication } from '@nestjs/common'
import { ApiConfigService } from './utils/api-config-service'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export default class OpenApi {
  constructor(private apiConfigservice: ApiConfigService) {}

  async handler(app: INestApplication) {
    if (this.apiConfigservice.isDevelopment) {
      const document = SwaggerModule.createDocument(app, this.swaggerSettings)
      SwaggerModule.setup('api/swagger', app, document)
    }
  }

  get swaggerSettings() {
    return new DocumentBuilder()
      .setTitle(`${this.apiConfigservice.projectName} API`)
      .setDescription(
        `${this.apiConfigservice.projectName} Backend API Documentation.`
      )
      .setVersion('1.0')
      .addTag(`${this.apiConfigservice.projectName}`)
      .addBearerAuth(
        {
          description:
            'The JWT token is required to access the some of the endpoints.',
          type: 'http',
          in: 'header',
          name: 'Authorization',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        'Authorization'
      )
      .build()
  }
}
