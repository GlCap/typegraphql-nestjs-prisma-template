import { IncomingGQLContext, ResolverGQLContext } from './app.types';
import { PrismaService } from './prisma/prisma.service';

export default (prisma: PrismaService) => async (
  ctx: IncomingGQLContext,
): Promise<ResolverGQLContext> => {
  const { request, reply } = ctx;

  return {
    request,
    reply,
    prisma,
  };
};
