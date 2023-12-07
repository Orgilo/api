import { Inject, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';





@Module({
  imports: [
    UserModule, 

    
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
       type: 'postgres',
       host: configService.get('DB_HOST'),
       port: configService.get('DB_PORT'),
       username: configService.get('DB_USERNAME'),
       password: configService.get('DB_PASSWORD'),
       database: configService.get('DB_NAME'),
       synchronize: true,
       entities: [__dirname + '/**/*.entity{.js, .ts}'],
       logging: true

      }),
      
      inject: [ConfigService],
    }),
    
    PassportModule.register({ session: true }), 
 
    TypeOrmModule.forFeature([User]),
    
    AuthModule,
    
    MenuModule,

  
   
    
  ],

  providers: [AppService,],

  controllers: [],
})
export class AppModule {}
