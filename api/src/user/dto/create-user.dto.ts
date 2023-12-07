import { IsEmail, MinLength, } from 'class-validator';

export class CreateUserDto {
  
  firstName: string;
  lastName: string;
 
  @IsEmail()
  email: string;

  @MinLength(6, { message: 'Enter a minimum 6-digit code!' })
  password: string;

}
