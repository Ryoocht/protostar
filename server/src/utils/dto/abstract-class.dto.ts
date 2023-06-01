import { IsDate } from 'class-validator'

export class AbstractClassDto {
  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date
}
