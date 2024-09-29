import { Injectable } from '@nestjs/common';
import { Item } from 'src/types/item';

const items: Item[] = [
  {
    id: '1',
    name: 'Item 1',
  },
  {
    id: '2',
    name: 'Item 2',
  },
];

@Injectable()
export class TodoService {
  getAllItems(): Item[] {
    return items;
  }
  //get an item by id
  getItemById(id: string): Item {
    return items.find((item) => item.id === id);
  }

  //create an item
  createAnItem(item: Item): Item {
    items.push(item);
    return item;
  }

  //update the name of an item by id
  updateItemNameById(id: string, name: string): Item {
    const itemToUpdate = items.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.name = name;
      return itemToUpdate;
    } else {
      return null;
    }
  }
}
