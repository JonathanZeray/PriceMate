// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import {
  index,
  pgTable,
  serial,
  timestamp,
  varchar,
  real,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 *
 *
 */

export const products = pgTable(
  "product",
  {
    id: serial("id").primaryKey(),
    productName: varchar("productName", { length: 256 }).notNull(), // input name
    imageUrl: varchar("imageUrl", { length: 1024 }).notNull(), //input  url for image
    userId: varchar("userId", { length: 256 }).notNull(),
    initialPrice: real("initialPrice").notNull().default(0), // input what u bought for
    secondHandPrice: real("secondHandPrice").notNull().default(0), // calculated
    category: varchar("category", { length: 256 }).notNull(), // select for cat
    condition: varchar("condition", { length: 256 }).notNull(), // select for condition
    age: real("age").notNull().default(0), // select for age
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.productName),
  })
);
