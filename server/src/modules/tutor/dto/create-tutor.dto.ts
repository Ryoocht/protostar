import { CONSTANTS } from 'src/utils/constant'
import { ApiProperty, OmitType } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, Length } from 'class-validator'
import UserDto from 'src/modules/user/dto/user.dto'
import ProfileDto from 'src/modules/profile/dto/profile.dto'

export class CreateTutorDto extends OmitType(UserDto, [
  'createdAt',
  'updatedAt',
]) {
  @ApiProperty({
    description: 'Display User ID (8 digits)',
    example: '12345678',
  })
  @IsNotEmpty()
  @IsNumber()
  @Length(CONSTANTS.USER_ID)
  userId: number

  @ApiProperty({
    description: 'Tutor Profile',
    type: ProfileDto,
  })
  profile?: ProfileDto
}
