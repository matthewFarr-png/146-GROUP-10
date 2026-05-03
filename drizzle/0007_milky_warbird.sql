ALTER TABLE "trades" DROP CONSTRAINT "trades_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "user_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "user_id" DROP NOT NULL;