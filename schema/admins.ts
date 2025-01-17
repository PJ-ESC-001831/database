import { pgTable, serial } from 'drizzle-orm/pg-core';

import { users } from './users';

// Define the Admin type
export const admins = pgTable('admins', {
  id: serial('id').primaryKey(),
  userId: serial('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
});
