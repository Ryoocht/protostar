import { Injectable } from '@nestjs/common'
import GenericService from 'src/utils/generic-service'

@Injectable()
export class UserService extends GenericService {
  findOneByEmail(email: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
    })
  }
}
