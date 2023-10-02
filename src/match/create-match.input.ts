import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, Min, Max, IsOptional } from 'class-validator';

@InputType()
export class CreateMatchInput {
  @IsDateString()
  @Field()
  date: string;

  @Min(1)
  @Max(4)
  @Field()
  maxPlayers: number;

  @Field({ nullable: true })
  note?: string;
}
