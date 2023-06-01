import { Unique } from 'src/utils/decorator/unique.decorator'
import { ApiProperty } from '@nestjs/swagger'
import { AbstractClassDto } from 'src/utils/dto/abstract-class.dto'
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator'
import { CONSTANTS } from 'src/utils/constant'

export default class UserDto extends AbstractClassDto {
  @ApiProperty({
    description: 'User First Name',
    example: 'Ryo',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  firstName: string

  @ApiProperty({
    description: 'User Last Name',
    example: 'Tanaka',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  lastName: string

  @ApiProperty({
    description: 'User Email',
    example: 'ryo@moonward.com.au',
  })
  @IsNotEmpty()
  @IsEmail()
  @Unique('user', 'email')
  email: string

  @ApiProperty({
    description: 'User Phone Number',
    example: '+61410123456',
  })
  @IsOptional()
  @IsString()
  @IsPhoneNumber()
  phoneNumber?: string

  @ApiProperty({
    description: "User's Country",
    example: 'Japan',
  })
  @IsOptional()
  @IsString()
  country?: string

  @ApiProperty({
    description: "User's First Language",
    example: 'Japanese',
  })
  @IsOptional()
  @IsString()
  firstLanguage?: string

  @ApiProperty({
    description: "User's Second Language",
    example: 'English',
  })
  @IsOptional()
  @IsString()
  secondLanguage?: string

  @ApiProperty({
    description: 'User Avatar',
    example: '',
  })
  @IsOptional()
  @IsString()
  avatar?: string

  @ApiProperty({
    description: 'User Password',
    example: 'Protostar@123',
  })
  @IsNotEmpty()
  @IsString()
  @Length(CONSTANTS.MIN_PASSWORD_LENGTH, CONSTANTS.MAX_PASSWORD_LENGTH)
  password: string
}
