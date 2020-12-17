import type { PrismaClient } from '@prisma/client';
import type { FastifyRequest, FastifyReply } from 'fastify';

/**
 * Context object received by the default context function.
 * Read [apollo docs](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields) for more infos
 */
export interface IncomingGQLContext {
  request: FastifyRequest;
  reply: FastifyReply;
}
export interface ResolverGQLContext extends IncomingGQLContext {
  prisma: PrismaClient;
}
