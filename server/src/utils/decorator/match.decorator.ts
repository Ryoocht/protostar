import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator'

/**
 * Compare value with other field
 * @param property Field name to compare the value
 * @param validationOptions Read more {@link ValidationOptions}
 * @returns True if matches, false otherwise
 */

export function Match(property: string, validationoptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationoptions,
      constraints: [property],
      validator: MatchConstraint,
    })
  }
}

@ValidatorConstraint({ name: 'Match' })
export class MatchConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedpropertyName] = args.constraints
    const relatedValue = (args.object as any)[relatedpropertyName]
    return value === relatedValue
  }
}
