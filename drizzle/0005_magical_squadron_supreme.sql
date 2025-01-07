ALTER TABLE "images" ALTER COLUMN "url" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "images" ADD COLUMN "key" text NOT NULL;