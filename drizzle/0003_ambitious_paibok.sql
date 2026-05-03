ALTER TABLE "bets" ADD COLUMN "closes_at" timestamp;--> statement-breakpoint
ALTER TABLE "trades" DROP COLUMN "question_id";