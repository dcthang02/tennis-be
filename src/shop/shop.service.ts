import { Injectable, NotFoundException } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { Shop } from './shop.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop) private shopRepository: MongoRepository<Shop>,
  ) {}

  async getShopById(id: string) {
    const shop = await this.shopRepository.findOneBy({ id });
    if (!shop) {
      throw new NotFoundException();
    }
    return shop;
  }

  async createShop() {
    const shop = this.shopRepository.create({
      id: uuid(),
      products: [],
    });
    return this.shopRepository.save(shop);
  }
}
