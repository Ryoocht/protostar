import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { Unique } from 'src/utils/decorator/unique.decorator'
import CreateStudentAddressDto from './create-student-address.dto'
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator'

export default class StudentDto {
  @ApiProperty({
    description: 'Student First Name',
    example: 'Ryo',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  firstName: string

  @ApiProperty({
    description: 'Student Last Name',
    example: 'Tanaka',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  lastName: string

  @ApiProperty({
    description: 'Student Email',
    example: 'ryo@moonward.com.au',
  })
  @IsEmail()
  @IsNotEmpty()
  @Unique('student', 'email')
  email: string

  @ApiProperty({
    description: 'Student Avatar Picture',
    required: false,
  })
  @IsOptional()
  @IsString()
  avatar?: string

  @ApiProperty({
    description: 'Student Address',
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateStudentAddressDto)
  address?: CreateStudentAddressDto
}
