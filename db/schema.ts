import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const blogTable = pgTable("blog", {
  id: uuid().defaultRandom().primaryKey(),
  title: varchar({length: 80}).notNull(),
  content: text().notNull(),
  orgId: text().notNull(),
  createdAt: timestamp().defaultNow(),
});

export type CreateBlogType = typeof blogTable.$inferInsert;
export type SelectBlogType = typeof blogTable.$inferSelect;
