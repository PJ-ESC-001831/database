import { pgTable, serial, text, integer, json } from 'drizzle-orm/pg-core';

import { campaigns } from './campaigns';

// Define the Variant table
export const variants = pgTable('variants', {
  id: serial('id').primaryKey(),
  campaignId: integer('campaign_id').notNull().references(() => campaigns.id),
  title: text('title').notNull(),
  options: json('options').notNull(), // Assuming options should not be null
});
