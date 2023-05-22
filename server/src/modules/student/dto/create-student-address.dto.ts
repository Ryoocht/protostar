import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export default class CreateStudentAddressDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  fullAddress?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  streetNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  streetName?: string

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  suburb?: string

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  state?: string

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  city?: string

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  country?: string

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  postcode?: string

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  lng?: number

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  lat?: number
}
