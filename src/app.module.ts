import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';

@Module({
  imports: [],
  controllers: [AppController, MensajesController],
  providers: [AppService],
})
export class AppModule {}
