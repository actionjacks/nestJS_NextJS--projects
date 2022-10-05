import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CreatePetInput } from 'src/dto/input/create-pet.inut';
import { Owner } from 'src/owners/entities/owner.entity';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  // http://localhost:3000/graphql
  /*
  {
    getPet(id: 1) {
      name
    }
  }
*/
  @Query((returns) => Pet)
  async getPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petsService.findOne(id);
  }

  // http://localhost:3000/graphql
  /*
  {
    pets {
      name
    }
  }
*/
  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  // http://localhost:3000/graphql
  /*
  {
    mutations {
      createPet(createPetInput: {
        name: 'lorm
      }) {
        id,
        name
      }
    }
  }
*/
  @Mutation((returns) => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }

  @ResolveField((returns) => Owner)
  owner(@Parent() pet: Pet): Promise<Owner> {
    return this.petsService.getOwner(pet.ownerId);
  }
}
