import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { campaigns } from './campaigns';
import { users } from './users';

// Define the Transaction table
export const transactions = pgTable('transactions', {
  id: serial('id').primaryKey(),
  campaignId: integer('campaign_id')
    .notNull()
    .references(() => campaigns.id),
  transactionId: text('transaction_id').notNull(),
  buyerId: integer('buyer_id')
    .notNull()
    .references(() => users.id),
  reference: text('reference').notNull(),
  state: text('state').notNull(),
  amount: text('balance').notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
});
