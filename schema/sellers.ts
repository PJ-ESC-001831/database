import { pgTable, serial, text } from 'drizzle-orm/pg-core';

import { users } from './users';

// Define the Seller type
export const sellers = pgTable('sellers', {
  id: serial('id').primaryKey(),
  tokenId: text('token_id'),
  userId: serial('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
});
