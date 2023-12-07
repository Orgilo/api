// menu.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';


@Controller('menus')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Post()
    async create(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
        return this.menuService.createMenu(createMenuDto);
    }

    @Get()
    async findAll(): Promise<Menu[]> {
        return this.menuService.getAllMenus();
    }

    
}
