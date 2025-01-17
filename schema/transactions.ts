import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { campaigns } from './campaigns';
import { users } from './users';

// Define the Transaction table
export const transactions = pgTable(
  'transactions',
  {
    id: serial('id').primaryKey(),
    campaignId: integer('campaign_id')
      .notNull()
      .references(() => campaigns.id),
    transactionId: text('transaction_id').notNull(),
    buyerId: integer('buyer_id')
      .notNull()
      .references(() => users.id),
    reference: text('reference').notNull().unique(),
    checkoutLink: text('checkout_link'),
    balance: integer('balance').notNull(), // Cast floats to integers to avoid having rounding errors
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => {
    return {
      transactionIdIdx: index('name_idx').on(table.transactionId),
      referenceIdx: uniqueIndex('email_idx').on(table.reference),
    };
  },
);
