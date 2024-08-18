import { pgTable, serial, varchar, timestamp, json } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  emailAddress: varchar('email_address', { length: 256 }).notNull().unique(),
  phoneNumber: varchar('phone_number', { length: 256 }),
  firstName: varchar('first_name', { length: 256 }).notNull(),
  middleName: varchar('middle_name', { length: 256 }),
  lastName: varchar('last_name', { length: 256 }).notNull(),
  profile: json('profile'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
