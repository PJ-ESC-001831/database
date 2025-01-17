import { pgTable, serial, text, integer, uuid } from 'drizzle-orm/pg-core';

import { campaigns } from './campaigns';

// Define the Images table
export const images = pgTable('images', {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid').unique().notNull(),
  campaignId: integer('campaign_id')
    .notNull()
    .references(() => campaigns.id),
  key: text('key').notNull(),
  bucket: text('bucket').notNull(),
});
