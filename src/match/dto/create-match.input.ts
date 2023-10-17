import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, Min, Max, IsUUID, IsOptional } from 'class-validator';

@InputType()
export class CreateMatchInput {
  @IsOptional()
  @IsDateString()
  @Field({ nullable: true })
  date?: string;

  @Min(1)
  @Max(4)
  @Field()
  maxPlayers: number;

  @Field({ nullable: true })
  note?: string;

  @IsOptional()
  @IsUUID('4', { each: true })
  @Field((type) => [ID], { defaultValue: [] })
  invitedPlayerIds?: string[];

  @IsOptional()
  @IsUUID('4')
  @Field((type) => ID, { nullable: true })
  stadiumId?: string;
}
