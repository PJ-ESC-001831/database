import { pgTable, serial, text } from 'drizzle-orm/pg-core';

import { users } from './users';

// Define the Buyer type
export const buyers = pgTable('buyers', {
  id: serial('id').primaryKey(),
  tokenId: text('token_id'),
  userId: serial('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
});
