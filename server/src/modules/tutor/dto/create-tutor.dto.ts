import { ApiProperty, OmitType } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length } from 'class-validator'
import ProfileDto from 'src/modules/profile/dto/profile.dto'
import UserDto from 'src/modules/user/dto/user.dto'
import { CONSTANTS } from 'src/utils/constant'

export default class CreateTutorDto extends OmitType(UserDto, [
  'createdAt',
  'updatedAt',
]) {
  @ApiProperty({
    description: 'Display User ID (8 digits)',
    example: '12345678',
  })
  @IsNotEmpty()
  @IsString()
  @Length(CONSTANTS.USER_ID)
  userId: string

  @ApiProperty({
    description: 'Tutor Profile',
    type: ProfileDto,
  })
  profile?: ProfileDto
}
