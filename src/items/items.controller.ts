// src/items/items.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemsService.create(item);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Item> {
    return this.itemsService.remove(id);
  }
}
