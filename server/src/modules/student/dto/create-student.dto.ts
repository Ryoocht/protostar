import StudentDto from './student.dto'
import { ApiProperty } from '@nestjs/swagger'
import { Length } from 'class-validator'
import { Match } from 'src/utils/decorator/match.decorator'
import { CONSTANTS } from 'src/utils/constant/index'

export class CreateStudentDto extends StudentDto {
  @ApiProperty({
    description: 'Code sent by email.',
    example: '000000',
  })
  @Length(6, 6)
  code: string

  @ApiProperty({
    description: 'User password',
    example: 'asdf1234!A',
  })
  @Length(CONSTANTS.MIN_PASSWORD_LENGTH, CONSTANTS.MAX_PASSWORD_LENGTH)
  password: string

  @ApiProperty({
    description: 'Password confirmation',
    example: 'asdf1234!A',
  })
  @Match('password', { message: CONSTANTS.PASSWORD_MISMATCH })
  confirmPassword: string
}
