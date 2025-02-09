ALTER TABLE "transactions" RENAME COLUMN "reference" TO "public_id";--> statement-breakpoint
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_reference_unique";--> statement-breakpoint
DROP INDEX IF EXISTS "email_idx";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "email_idx" ON "transactions" USING btree ("public_id");--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_public_id_unique" UNIQUE("public_id");