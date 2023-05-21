import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Unique } from "src/utils/decorator/unique.decorator";

export class CreateStudentDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastName: string

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    @Unique('student', 'email')
    email: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    avatar: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string
}
