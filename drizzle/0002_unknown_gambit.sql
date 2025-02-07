ALTER TABLE "campaigns" ADD COLUMN "public_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "public_id" text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "campaigns_public_id_idx" ON "campaigns" USING btree ("public_id");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users_public_id_idx" ON "users" USING btree ("public_id");