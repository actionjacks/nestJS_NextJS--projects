import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlpha() // '12423'' error
  @Field()
  name: string;

  @Field()
  type?: string;

  @Field((type) => Int)
  ownerId: number;
}
