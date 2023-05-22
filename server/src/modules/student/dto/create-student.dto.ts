import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length } from 'class-validator'
import StudentDto from './student.dto'

export class CreateStudentDto extends StudentDto {
  @ApiProperty({
    description: 'Code sent by SMS.',
    example: '000000',
  })
  @Length(6, 6)
  code: string

  @ApiProperty({
    description: 'User password',
    example: '12345678',
  })
  @Length(CONSTANTS.MIN_PASSWORD_LENGTH, CONSTANTS.MAX_PASSWORD_LENGTH)
  password: string

  @ApiProperty({
    description: 'Password confirmation',
    example: '12345678',
  })
  @Match('password', { message: REPORT_ERRORS.PASSWORD_MISMATCH })
  confirmPassword: string
}
