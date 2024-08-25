import { pgTable, serial, varchar, timestamp, json } from 'drizzle-orm/pg-core';

// Define the User table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  emailAddress: varchar('email_address', { length: 256 }).notNull().unique(),
  phoneNumber: varchar('phone_number', { length: 256 }),
  firstName: varchar('first_name', { length: 256 }).notNull(),
  lastName: varchar('last_name', { length: 256 }).notNull(),
  profile: json('profile'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
