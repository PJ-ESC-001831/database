import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { users } from './users';

// Define the Campaign table
export const campaigns = pgTable('campaigns', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  costBase: integer('cost_base').notNull(),
  sellerId: integer('seller_id').notNull().references(() => users.id),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  checkoutLink: text('checkout_link').notNull(),
});
