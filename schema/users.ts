import {
  pgTable,
  serial,
  varchar,
  timestamp,
  json,
  text,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

// Define the User table
export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    emailAddress: varchar('email_address', { length: 256 }).notNull().unique(),
    phoneNumber: varchar('phone_number', { length: 256 }),
    firstName: varchar('first_name', { length: 256 }).notNull(),
    lastName: varchar('last_name', { length: 256 }).notNull(),
    publicId: text('public_id').notNull(),
    profile: json('profile'),
    deletedAt: timestamp('deleted_at'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (table) => {
    return {
      publicIdIndex: uniqueIndex('users_public_id_idx').on(table.publicId),
    };
  },
);
