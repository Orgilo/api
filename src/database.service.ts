// database.service.ts
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  private readonly pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    });
  }

  // Add methods to interact with the database using this.pool
  // For example, you might have methods for executing queries, etc.
}
