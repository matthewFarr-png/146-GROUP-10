ALTER TABLE "bets" ALTER COLUMN "closes_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "user_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "bet_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();