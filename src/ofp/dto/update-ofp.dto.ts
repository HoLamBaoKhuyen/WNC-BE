import { PartialType } from '@nestjs/mapped-types';
import { CreateOfpDto } from './create-ofp.dto';

export class UpdateOfpDto extends PartialType(CreateOfpDto) {}
