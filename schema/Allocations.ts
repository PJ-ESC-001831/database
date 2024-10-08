import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { transactions } from './transactions';

// Define the Allocation table
export const allocations = pgTable('allocations', {
  id: serial('id').primaryKey(),
  transactionId: integer('transaction_id')
    .notNull()
    .references(() => transactions.id),
  state: text('state').notNull(),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
});
