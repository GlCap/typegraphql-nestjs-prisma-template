import { Module } from '@nestjs/common';
import {
  UpvoteCrudResolver,
  UpvoteRelationsResolver,
} from '@generated/type-graphql';
import { UpvoteService } from './upvote.service';

@Module({
  providers: [UpvoteCrudResolver, UpvoteRelationsResolver, UpvoteService],
})
export class UpvoteModule {}
