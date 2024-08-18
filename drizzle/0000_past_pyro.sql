CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email_address" varchar(256) NOT NULL,
	"phone_number" varchar(256),
	"first_name" varchar(256) NOT NULL,
	"middle_name" varchar(256),
	"last_name" varchar(256) NOT NULL,
	"profile" json,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_address_unique" UNIQUE("email_address")
);
