import { Injectable } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator'
import PrismaProvider from 'prisma/prisma-provider'

@ValidatorConstraint({ name: 'Unique', async: true })
@Injectable()
export class UniqueConstraint implements ValidatorConstraintInterface {
  private prisma: PrismaClient = PrismaProvider.getConnection()

  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const [model, property = args.property] = args.constraints

    //@ts-ignore
    const record = await this.prisma[model].findUnique({
      where: {
        [property]: value,
      },
    })

    return record === null
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} entered is not valid`
  }
}

export function Unique(
  model: Uncapitalize<Prisma.ModelName>,
  uniqueField?: string,
  validationOptions?: ValidationOptions
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [model, uniqueField],
      validator: UniqueConstraint,
    })
  }
}
