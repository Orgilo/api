// menu.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>,
    ) {}

    async createMenu(createMenuDto: CreateMenuDto): Promise<Menu> {
        const menu = this.menuRepository.create(createMenuDto);
        return this.menuRepository.save(menu);
    }

    async getAllMenus(): Promise<Menu[]> {
        return this.menuRepository.find();
    }

    
}
