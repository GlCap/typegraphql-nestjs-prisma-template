import { Module } from '@nestjs/common';
import {
  UserCrudResolver,
  UserRelationsResolver,
} from '@generated/type-graphql';

@Module({
  providers: [UserCrudResolver, UserRelationsResolver],
})
export class UserModule {}
