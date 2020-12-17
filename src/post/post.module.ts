import { Module } from '@nestjs/common';
import {
  PostCrudResolver,
  PostRelationsResolver,
} from '@generated/type-graphql';

@Module({
  providers: [PostCrudResolver, PostRelationsResolver],
})
export class PostModule {}
