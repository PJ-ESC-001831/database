import { pgTable, serial } from 'drizzle-orm/pg-core';

import { users } from './users';

// Define the Seller type
export const sellers = pgTable('sellers', {
  id: serial('id').primaryKey(),
  userId: serial('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
});
