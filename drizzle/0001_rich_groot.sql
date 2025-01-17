ALTER TABLE "buyers" ADD COLUMN "token_id" text;--> statement-breakpoint
ALTER TABLE "sellers" ADD COLUMN "token_id" text;--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "checkout_link" text;--> statement-breakpoint
ALTER TABLE "campaigns" DROP COLUMN IF EXISTS "checkout_link";--> statement-breakpoint
ALTER TABLE "transactions" DROP COLUMN IF EXISTS "state";