import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeGraphQLModule } from 'typegraphql-nestjs';

import {
  applyModelsEnhanceMap,
  applyResolversEnhanceMap,
} from '@generated/type-graphql';
import appConfig from './app.config';
import gqlContext from './app.context';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UpvoteModule } from './upvote/upvote.module';
import { PostModule } from './post/post.module';

applyModelsEnhanceMap({});
applyResolversEnhanceMap({});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [appConfig],
    }),
    TypeGraphQLModule.forRootAsync({
      imports: [PrismaModule],
      inject: [PrismaService, ConfigService],
      useFactory: (prisma: PrismaService, config: ConfigService) => {
        return {
          context: gqlContext(prisma),
          emitSchemaFile: config.get<NodeEnvType>('NODE_ENV') !== 'production',
          validate: true,
        };
      },
    }),
    UserModule,
    PostModule,
    UpvoteModule,
  ],
})
export class AppModule {}
