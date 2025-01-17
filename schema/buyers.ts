import { pgTable, serial } from 'drizzle-orm/pg-core';

import { users } from './users';

// Define the Buyer type
export const buyers = pgTable('buyers', {
  id: serial('id').primaryKey(),
  userId: serial('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
});
