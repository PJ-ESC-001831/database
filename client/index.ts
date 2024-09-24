import { Pool } from 'pg';
import dotenv from 'dotenv';
import { labeledLogger } from '@modules/logger';
import { drizzle, NodePgClient } from 'drizzle-orm/node-postgres';
import { ClientError } from './errors';

const logger = labeledLogger('database:client');

// Load environment variables from a .env file
dotenv.config();

export default class Connection {
  private pool: Pool;
  private client: NodePgClient | undefined = undefined;
  private db: any | undefined = undefined;

  /**
   * Initializes the Connection instance, sets up the connection pool, and configures the database client and instance.
   */
  constructor() {
    this.pool = new Pool({
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      port: process.env.POSTGRES_PORT
        ? parseInt(process.env.POSTGRES_PORT, 10)
        : 5432,
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'password',
      database: process.env.POSTGRES_DB || 'db_name',
    });
  }

  /**
   * Configures the database connection by setting the client and the database instance.
   *
   * @public
   * @async
   * @throws Will throw an error if the database connection or configuration fails.
   */
  public async configure(): Promise<Connection> {
    try {
      await this.setClient();
      await this.setDb();
      return this;
    } catch (error) {
      logger.error('Failed to configure the database connection:', error);
      throw error;
    }
  }

  /**
   * Sets the database client using the connection pool.
   *
   * @private
   * @async
   * @throws {ClientError} Will throw an error if setting the database client fails.
   */
  private async setClient(): Promise<Connection> {
    try {
      this.client = await this.pool.connect();
      return this;
    } catch (error) {
      logger.error('Failed to set the database client:', error);
      throw new ClientError('Failed to set the database client');
    }
  }

  /**
   * Sets the database instance using the drizzle ORM.
   *
   * @private
   * @async
   * @throws {ClientError} Will throw an error if the client is not set or if setting the database instance fails.
   */
  private async setDb(): Promise<Connection> {
    if (!this.client) {
      throw new ClientError('Client not set');
    }

    try {
      this.db = await drizzle(this.client);
      return this;
    } catch (error) {
      logger.error('Failed to set the database instance:', error);
      throw new ClientError('Failed to set the database instance');
    }
  }

  /**
   * Returns the database instance.
   *
   * @returns The database instance.
   */
  public getDb() {
    return this.db;
  }

  /**
   * Returns the database client.
   *
   * @returns The database client.
   */
  public getClient() {
    return this.client;
  }
}
