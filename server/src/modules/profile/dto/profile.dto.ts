import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength } from "class-validator";
import { AbstractClassDto } from "src/utils/dto/abstract-class.dto";

export default class ProfileDto extends AbstractClassDto {
    @ApiProperty({
        description: 'User Bio',
        example: 'Hi, my name is Ryo. Nice to meet you.'
    })
    @IsOptional()
    @IsString()
    @MaxLength(500)
    bio: string
}