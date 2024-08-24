import { pgTable, serial, text, integer, uuid } from 'drizzle-orm/pg-core';

import { campaigns } from './Campaign';

// Define the Images table
export const images = pgTable('images', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid').notNull(),
  campaignId: integer('campaign_id').notNull().references(() => campaigns.id),
  url: text('url').notNull(),
});
