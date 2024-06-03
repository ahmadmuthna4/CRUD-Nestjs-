// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/crud'), // Replace with your MongoDB connection string
    ItemsModule,
  ],
})
export class AppModule {}