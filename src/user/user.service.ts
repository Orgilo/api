import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class UserService {
  
  
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const existingUser = await this.userRepository.findOne({
        where: {
          email: createUserDto.email,
        },
      })
      

      if (existingUser) {
        throw new BadRequestException('Энэ email бүртгэлтэй байна.');
      }

      const user = await this.userRepository.save({
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
        password: await argon2.hash(createUserDto.password),
      })
     const token = this.jwtService.sign({ email: createUserDto.email})
      return { user, token }
    } 
    
    
    catch (error) {
      throw new BadRequestException('Бүртгэл амжилтгүй.');
    }
    
  }
 
  async findOne(email: string) {
    return await this.userRepository.findOne({
      where: {
        email, 
      },
    });
  }
  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } }); 
  }
  
  
 
}
