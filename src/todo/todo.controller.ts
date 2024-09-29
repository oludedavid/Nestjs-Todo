import { Controller, Get, Put, Post, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Item } from 'src/types/item';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('items')
  getAllItems() {
    return this.todoService.getAllItems();
  }

  @Post('items/createItem')
  createAnItem(@Body('item') item: Item) {
    return this.todoService.createAnItem(item);
  }
  @Put('items/:id/:name')
  updateItemNameById(@Param('id') id: string, @Param('name') name: string) {
    return this.todoService.updateItemNameById(id, name);
  }
}
