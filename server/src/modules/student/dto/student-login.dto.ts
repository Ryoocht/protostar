import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class StudentLoginDto {
  @ApiProperty({
    description: 'student email',
    example: 'ryo@moonward.com.au',
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string

  @ApiProperty({
    description: 'student password',
    example: 'asdf1234!A',
  })
  @IsNotEmpty()
  @IsString()
  password: string
}
