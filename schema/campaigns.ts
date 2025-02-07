import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { sellers } from './sellers';

// Define the Campaign table
export const campaigns = pgTable(
  'campaigns',
  {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    costBase: integer('cost_base'),
    publicId: text('public_id').notNull(),
    sellerId: integer('seller_id')
      .notNull()
      .references(() => sellers.id),
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => {
    return {
      publicIdIndex: uniqueIndex('campaigns_public_id_idx').on(table.publicId),
    };
  },
);
