"use server";
import { db } from "./server/db";
import * as schema from "./server/db/schema";

export async function postToDB() {
  await db.insert(schema.products).values({
    productName: "Test",
    imageUrl: "test",
    userId: "test",
    initialPrice: 100,
    secondHandPrice: 50,
    category: "test",
    condition: "test",
    age: 4,
  });
}
