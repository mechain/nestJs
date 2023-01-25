import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MessagesController } from './messages/messages.controller';
import { MessagesModule } from './messages/messages.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule, MessagesModule],
  controllers: [MessagesController],
})
export class AppModule {}
