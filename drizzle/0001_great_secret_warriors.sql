CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"productName" varchar(256) NOT NULL,
	"imageUrl" varchar(1024) NOT NULL,
	"userId" varchar(256) NOT NULL,
	"initialPrice" real DEFAULT 0 NOT NULL,
	"secondHandPrice" real DEFAULT 0 NOT NULL,
	"category" varchar(256) NOT NULL,
	"condition" varchar(256) NOT NULL,
	"age" real DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
DROP TABLE "image";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "product" USING btree ("productName");